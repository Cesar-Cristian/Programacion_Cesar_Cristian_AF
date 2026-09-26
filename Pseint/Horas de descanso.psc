Algoritmo Horas
	Definir TerHr,Dias,Tvida,Hr_an,Hr_Tv como entero
	//Definimos los valores de las variables
	TerHr<-8
	Dias<-365
	Escribir "Ingrese la edad:"
	Leer Tvida
	//Caculamos el tiempo de descanso de acuerdo a 1 año
	Hr_an<-TerHr*Dias
	//Calculamos el tiempo de descanso de acuerdo al tiempo de vida de la persona
	Hr_Tv<-Hr_an*Tvida
	
	Escribir "Las horas de descanso de acuerdo al tiempo de vida es:",Hr_Tv
	
FinAlgoritmo
