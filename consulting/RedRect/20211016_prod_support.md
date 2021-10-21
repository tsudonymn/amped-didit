# Prod support

- Chris Hooper 
- Adam S.

-- 16:45
- linkerd-identity-data-plane
---------------------------
‼ data plane proxies certificate match CA
    Some pods do not have the current trust bundle and must be restarted:
	* es/prod-es-es-masters-0
	* es/prod-es-es-masters-1
	* es/prod-es-es-masters-2
	* jaeger/jaeger-query-85b4f64c58-4bfw6
	* thanos/thanos-store-old-0
    see https://linkerd.io/checks/#l5d-identity-data-plane-proxies-certs-match-ca for hints

