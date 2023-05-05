def max_value_with_5(n):
    # Caso especial: se n for 0, retorna 50
    if n == 0:
        return 50

    # Caso geral: insere o dígito 5 em uma posição apropriada
    str_n = str(n)
    if n >= 0:
        for i in range(len(str_n)):
            if str_n[i] < "5":
                return int(str_n[:i] + "5" + str_n[i:])
        return int(str_n + "5")
    else:
        for i in range(1, len(str_n)):
            if str_n[i] > "5":
                return int(str_n[:i] + "5" + str_n[i:])
        return int(str_n + "5")
