calificacion = int(input("Ingrese la calificación: "))
if calificacion < 0 or calificacion > 100:
    print("La calificación ingresada no es válida.")
else:
    if calificacion >= 70:
        print("Aprobado")
    else:
        print("Reprobado")
