const jose = require("node-jose");

const clientSecret = '2102f370-cd2a-4409-a5ab-760eba812faf';
const body = {
    requestId: "1231234"
};

// pvcb license private key
const merchantPrivateKey = `-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----`;
// eid public key
const eidCert = `-----BEGIN CERTIFICATE-----
MIIE8jCCA9qgAwIBAgIQVAESDxKv/JtHV15tvtt1UjANBgkqhkiG9w0BAQsFADArMQ0wCwYDVQQDDARJLUNBMQ0wCwYDVQQKDARJLUNBMQswCQYDVQQGEwJWTjAeFw0yMzA2MDcwNjU1MDNaFw0yNjA2MDkwNjU1MDNaMIHlMQswCQYDVQQGEwJWTjESMBAGA1UECAwJSMOgIE7hu5lpMRowGAYDVQQHDBFRdeG6rW4gSG/DoG5nIE1haTFCMEAGA1UECgw5Q8OUTkcgVFkgQ1AgROG7ikNIIFbhu6QgVsOAIEPDlE5HIE5HSOG7hiBT4buQIFFVQU5HIFRSVU5HMUIwQAYDVQQDDDlDw5RORyBUWSBDUCBE4buKQ0ggVuG7pCBWw4AgQ8OUTkcgTkdI4buGIFPhu5AgUVVBTkcgVFJVTkcxHjAcBgoJkiaJk/IsZAEBDA5NU1Q6MDExMDE4ODA2NTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJO6JDU+kNEUIiO6m75LOfgHkwGExYFv0tILHInS9CkK2k0FjmvU8VYJ0cQAsGGabpHIwfh07llLfK3TUZlhnlFZYRrYvuexlLWQydjHYPqT+1c3iYaiXXcOqEjmOupCj71m93ThFrYzzI2Zx07jccRptAAZrWMjI+30vJN7SDxhYsD1uQxYhUkx7psqMqD4/nOyaWzZHLU94kTAw5lhAlVOMu3/6pXhIltX/097Wji1eyYqHFu8w7q3B5yWgJYugEZfplaeLLtcTxok4VbQCb3cXTOSFiQYJ3nShlBd89AHxaVE+eqJaMuGj9z9rdIoGr9LHU/P6KF+/SLwxpsYgnkCAwEAAaOCAVUwggFRMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUyCcJbMLE30fqGfJ3KXtnXEOxKSswgZUGCCsGAQUFBwEBBIGIMIGFMDIGCCsGAQUFBzAChiZodHRwczovL3Jvb3RjYS5nb3Yudm4vY3J0L3ZucmNhMjU2LnA3YjAuBggrBgEFBQcwAoYiaHR0cHM6Ly9yb290Y2EuZ292LnZuL2NydC9JLUNBLnA3YjAfBggrBgEFBQcwAYYTaHR0cDovL29jc3AuaS1jYS52bjA0BgNVHSUELTArBggrBgEFBQcDAgYIKwYBBQUHAwQGCisGAQQBgjcKAwwGCSqGSIb3LwEBBTAjBgNVHR8EHDAaMBigFqAUhhJodHRwOi8vY3JsLmktY2Eudm4wHQYDVR0OBBYEFE6GFFM4HXne9mnFBZInWzSBkYNLMA4GA1UdDwEB/wQEAwIE8DANBgkqhkiG9w0BAQsFAAOCAQEAH5ifoJzc8eZegzMPlXswoECq6PF3kLp70E7SlxaO6RJSP5Y324ftXnSW0RlfeSr/A20Y79WDbA7Y3AslehM4kbMr77wd3zIij5VQ1sdCbOvcZXyeO0TJsqmQb46tVnayvpJYW1wbui6smCrTlNZu+c1lLQnVsSrAER76krZXaOZhiHD45csmN4dkY0T848QTx6QN0rubEW36Mk6/npaGU6qw6yF7UMvQO7mPeqdufVX9duUJav+WBJ/IY/EdqKp20cAT9vgNap7Bfgv5XN9PrE+Yt0C1BkxXnfJHA7L9hcoYrknsae/Fa2IP99RyIXaHLJyzSTKLRUhEVqrycM0UXg==
-----END CERTIFICATE-----`;

const test = async () => {
    try {
        const eidCertResult = await jose.JWK.asKey(
            eidCert,
            "pem",
            {
                kty: "RSA",
                alg: "RSA-OAEP-256",
                kid: clientSecret,
                enc: "A128GCM",
                key_opts: ["wrapKey", "enc"],
            }
        );
        const data = await jose.JWE.createEncrypt(
            {
                format: "compact",
                contentAlg: "A128GCM",
                fields: { iat: parseInt((Date.now() / 1000).toString()) },
            },
            eidCertResult
        )
        .update(JSON.stringify(body))
        .final();
        const jwe = data.toString();
        const merchantPrivateKeyResult = await jose.JWK.asKey(
            merchantPrivateKey,
            "pem"
        );
        const jwsResult = await jose.JWS.createSign(
            {
                format: "compact",
                fields: {
                    kid: clientSecret,
                    alg: "PS256",
                    cty: "JWE",
                    typ: "JOSE",
                },
            },
            merchantPrivateKeyResult
        )
        .update(jwe)
        .final();
        const jws = String(jwsResult);
        console.log("JWS:", jws);
    } catch (err) {
        console.log("Encryption failed due to ");
        console.log(err);
    }
};

test();