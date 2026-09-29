Algoritmo Libreria
	//Definimos los valores
	Definir Libros, Discos, Tocadiscos,Lib, Dis,ToDis, Can_Lib, Can_Dis, Can_ToDis Como Entero
	Definir ToLibros,ToDiscos, Des_Libros, Des_Discos, Des_Lib, Des_Dis, Des_To, Subtotal1,Subtotal2, Total Como Real
	//Asignamos valores a las variables
	Lib<-568
	Dis<-45
	ToDis<-678
	Can_Lib<-4
	Can_Dis<-3
	Can_ToDis<-1
	Des_Lib<-0.20
	Des_Dis<-0.15
	Des_To<-0.02
	//Precio de Libros con descuento
	Libros<-Can_Lib*Lib
	Des_Libros<-Libros*Des_Lib
	ToLibros<-Libros-Des_Libros
	//Precio de Discos con descuento
	Discos<-Can_Dis*Dis
	Des_Discos<-Discos*Des_Dis
	ToDiscos<-Discos-Des_Discos
	//Precio de Tocadiscos 
	Tocadiscos<-Can_ToDis*ToDis
	//Sumamos los resultados finales
	Subtotal1<-ToLibros+ToDiscos+Tocadiscos
	Subtotal2<-Subtotal1*Des_To
	Total<-Subtotal1-Subtotal2
	
	Escribir "La cantidad a pagar es:",Total
	
FinAlgoritmo
