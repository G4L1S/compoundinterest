<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Interés Compuesto</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
            box-sizing: border-box;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        form {
            margin: 0;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        input[type="number"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: calc(100% - 22px);
            box-sizing: border-box;
            margin-bottom: 10px; /* Añadir margen inferior para separación */
        }
        input[type="submit"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: calc(100% - 22px);
            background: #333;
            color: #fff;
            cursor: pointer;
            border: none;
            margin-top: 10px; /* Añadir margen superior para separación */
        }
        .result {
            margin-top: 20px;
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calculadora de Interés Compuesto</h1>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="initial_balance">Balance Inicial:</label>
            <input type="number" id="initial_balance" name="initial_balance" step="0.01" required>

            <label for="periodic_deposit">Depósito Periódico:</label>
            <input type="number" id="periodic_deposit" name="periodic_deposit" step="0.01" required>

            <label for="rate">Ratio Interés Anual (%):</label>
            <input type="number" id="rate" name="rate" step="0.01" required>

            <label for="years">Duración en Años:</label>
            <input type="number" id="years" name="years" required>

            <input type="submit" value="Calcular">
        </form>
    </div>
</body>
</html>
