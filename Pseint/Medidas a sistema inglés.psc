Algoritmo Medidas
	//Definimos las variables
	Definir cm1,cm2,cm3,Peso Como Entero
	Definir Estatura,in1,in2,in3,ft,lb,In Como Real
	//Asignamos valor a las variables
	cm1<-89
	cm2<-58
	cm3<-89
	Peso<-53
	Estatura<-1.70
	In<-2.54
	ft<-3.281
	lb<-2.205
	//Transformaciones de centimetros a pulgadas
	in1<-cm1/In
	in2<-cm2/In
	in3<-cm3/In
	//Transformacion de kilogramos a libras
	lb1<-Peso*lb
	//Transformacion de metros a pies
	St1<-Estatura*ft
	Escribir "La medida 1 en pulagas es:",In1
	Escribir "La medida 2 en pulagas es:",In2
	Escribir "La medida 3 en pulagas es:",In3
	
	Escribir "El peso en kilogramos a libras es:",lb1
	
	Escribir "De metros a pies es:",st1
FinAlgoritmo
