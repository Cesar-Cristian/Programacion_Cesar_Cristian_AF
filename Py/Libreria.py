#Asignamos valores a las variables
Lib = 568;
Dis = 45;
ToDis = 678;
Can_Lib = 4;
Can_Dis = 3;
Can_ToDis = 1;
ConDes_Lib = 0.2;
Des_Dis = 0.15;
Des_To = 0.02;
#Precio de Libros con descuento
Libros = Can_Lib * Lib;
Des_Libros = Libros * ConDes_Lib;
ToLibros = Libros - Des_Libros;
#Precio de Discos con descuento
Discos = Can_Dis * Dis;
Des_Discos = Discos * Des_Dis;
ToDiscos = Discos - Des_Discos;
#Precio de Tocadiscos
Tocadiscos = Can_ToDis * ToDis;
#Sumamos los resultados finales
Subtotal1 = ToLibros + ToDiscos + Tocadiscos;
Subtotal2 = Subtotal1 * Des_To;
Total = Subtotal1 - Subtotal2;

print("La cantidad a pagar es:", Total);