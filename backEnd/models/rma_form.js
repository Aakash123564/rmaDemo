const { DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const RmaForm = sequelize.define('rma_form', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title is required',
        },
      },
    },
    client_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Client name is required',
        },
      },
    },
    invoice_order_no: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Invoice/order no. is required',
        },
      },
    },
    client_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Address is required',
        },
      },
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'City is required',
        },
      },
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Province is required',
        },
      },
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Postal code is required',
        },
      },
    },
    contact_person: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Contact person is required',
        },
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: {
          msg: 'Valid Email is required',
        },
      },
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Phone is required',
        },
      },
    },
    product_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    part_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fault_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serial_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    supplier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rma_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rma_form',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  module.exports  = RmaForm