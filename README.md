Formularios y validaciones

Para la validacion de formularios se esta utilizando
la libreria de Jquery Validate para las validaciones de lado del cliente (FRONT).

La libreria de Jquery Validate se le añadio un script para agregar nuevas reglas de clase, para la realización de este script se investigo como se conformaba el CURP y RFC.

Clase para validar CURP:

curp: {
    required: true,
    curp: true
}

Clase para validar RFC:
rfc: {
    required: true,
    rfc: true
}

Clase para validar CURP y RFC:
curprfc: {
    required: true,
    curprfc: true
}


[CURP PARA PRUEBAS]
TOUR970422HCMRKB05
CARM970422HHGMDR00
CIPM970422HOCHLR07

[RFC PARA PRUEBAS]
PORI900503EY3
SAMD9312032J7
CADA820119NI0

