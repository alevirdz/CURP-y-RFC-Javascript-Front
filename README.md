<h1 class="rich-diff-level-zero">
<a id="user-content-formularios-y-validaciones" class="anchor rich-diff-level-one" aria-hidden="true" href="/alevirdz/CURP-y-RFC-Javascript-Front/blob/main/README.md#formularios-y-validaciones"></a>Formularios y validaciones</h1>

Para la validacion de formularios se esta utilizando
la libreria de Jquery Validate para las validaciones de lado del cliente (FRONT).

La libreria de Jquery Validate se le añadio un script para agregar nuevas reglas de clase, para la realización de este script se investigo como se conformaba el CURP y RFC.

Clase para validar CURP:
```
curp: {
    required: true,
    curp: true
}
```
Clase para validar RFC:
```
rfc: {
    required: true,
    rfc: true
}
```

Clase para validar CURP y RFC:
```
curprfc: {
    required: true,
    curprfc: true
}
```

<h3><b>[CURP PARA PRUEBAS]</b></h3>
```
TOUR970422HCMRKB05
CARM970422HHGMDR00
CIPM970422HOCHLR07
```

<h3><b>[RFC PARA PRUEBAS]</b></h3>
```
PORI900503EY3
SAMD9312032J7
CADA820119NI0
```
