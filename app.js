$(function(){

    $('#btnGuardar').on('click', function(){
        const nombre = $('#txtName').val();
        const email = $('#txtEmail').val();
        const telefono = $('#txtTelefono').val();
        const direccion =$('#txtDireccion').val();
        const nombremascota = $('#txtNamemascota').val();
        const tipomascota = $('#txtTipoMascota').val();
        const raza = $('#txtRaza').val();
        const edad =$('#txtEdad').val();

        console.log(' Nombres '+nombre+' Email '+email+' Telefono '+telefono+' Direccion '+direccion+' Nombre de Mascota '+nombremascota+
            ' Tipo de mascota '+tipomascota+' Raza '+raza+' Edad '+edad);
        alert(' Nombres '+nombre+' Email '+email+' Telefono '+telefono+' Direccion '+direccion+' Nombre de Mascota '+nombremascota+
            ' Tipo de mascota '+tipomascota+' Raza '+raza+' Edad '+edad);    
    });
    $('#btnLimpiar').on('click', function(){
        alert('Se limpiaran el formulario');
        // botón para limpiar los campos del formulario
        $('#txtName').val('');
        $('#txtEmail').val('');
        $('#txtTelefono').val('');
        $('#txtDireccion').val('');
        $('#txtNamemascota').val('');
        $('#txtTipoMascota').val('');
        $('#txtRaza').val('');
        $('#txtEdad').val('');        
    });
});
