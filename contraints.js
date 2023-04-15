/* ... */ {
    username: {
        type: DataTypes.TEXT,
        allowNull; false,
        unique; true
      };
    } /* ... */

    //nesse caso a requisicao é feita a nivel SQL e se a consulta falhar,
    //o javascript recebera um erro do sequelize "SequelizeUniqueConstraintError"


//exemplos de SQL Constraints:
//NOT NULL Constraint.
//UNIQUE Constraint.
//DEFAULT Constraint.
//CHECK Constraint.
//PRIMARY KEY Constraint.
//FOREIGN KEY Constraint.