// import logo from './logo.svg';
import './App.css';
// import './card-left-image-right-label/CardLeftImageRightLabel';
import CardList from './CardList';
import { slide as Menu } from 'react-burger-menu'
// import CardLeftImageRightLabel from './card-left-image-right-label/CardLeftImageRightLabel';
// import NavResponsiveVIP from './nav-responsive/NavResponsiveVIP'

function App() {

  const banksName = {
    BANDEC:'BANDEC',
    BPA:'BPA',
    BM:'BM'
  }

  const burgerMenuActions = [
    {
      title:"BANDEC",
      description:"BANCO DE CRÉDITO Y COMERCIO",
      link:"tel:/*222#",
      icon:""
    },
    {
      title:"BPA",
      description:"BANCO POPULAR DE AHORRO",
      link:"tel:/*222#",
      icon:""
    },
    {
      title:"BM",
      description:"BANCO METROPOLITANO",
      link:"tel:/*222#",
      icon:""
    },
    {
      title:"Jane Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    }


  ]

  const commonActions = [
    {
      //autenticarse BPA
      title:"AUTENTICARSE BPA",
      description:"Autenticarse en Banco Popular de Ahorro",
      link:"tel:/*444*40*01#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //autenticarse BANDEC
      title:"AUTENTICARSE BANDEC",
      description:"Autenticarse en Banco de Crédito y Comercio",
      link:"tel:/*444*40*02#",
      icon:"",
      banks:[banksName.BANDEC]
    },
    {
      //CERRAR SESION BPA
      title:"Cerrar sesión",
      description:"Cierra la sesión actual",
      link:"tel:/*444*70#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },

    {
      //transferencia
      title:"Transferencia",
      description:"Transferir saldo a otra cuenta o tarjeta",
      link:"tel:/*444*45#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Electricidad
      title:"Transferencia",
      description:"Pago de la electriciad",
      link:"tel:/*444*41#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Telefono
      title:"Teléfono",
      description:"Pago de factura telefónica",
      link:"tel:/*444*42#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Onat
      title:"ONAT",
      description:"Pago de la ONAT",
      link:"tel:/*444*43#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //AGUA
      title:"Agua",
      description:"Pago a Aguas de La Habana",
      link:"tel:/*444*40*51#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Recargar movil
      title:"Recarga móvil",
      description:"Recarga de saldo fijo línea Cubacel",
      link:"tel:/*444*54#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Giro Postal
      title:"Giro postal",
      description:"Envío o consulta de giro postal",
      link:"tel:/*444*64#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Gas
      title:"Gas",
      description:"Pago de factura de gas",
      link:"tel:/*444*67#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cuenta Joven Club
      title:"Cuenta Joven Club",
      description:"Recarga Cuenta Joven Club",
      link:"tel:/*444*93#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cuota nauta hogar
      title:"Cuota Nauta Hogar",
      description:"Paga cuota Nauta Hogar",
      link:"tel:/*444*84#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Deuda nauta hogar
      title:"Deuda Nauta Hogar",
      description:"Paga deuda Nauta Hogar",
      link:"tel:/*444*86#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Recarga Tarjeta Propia
      title:"Tarjeta Propiar",
      description:"Recarga Tarjeta Propia",
      link:"tel:/*444*77#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Deposito a plazo fijo
      title:"Depósito a plazo fijo",
      description:"Apertura de depósito a plazo fijo",
      link:"tel:/*444*81#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cerrar deposito a plazo fijo
      title:"Cerrar depósito a plazo fijo",
      description:"Cierre de depósito a plazo fijo",
      link:"tel:/*444*82#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Pagar Multa
      title:"Multa",
      description:"Pagar Multa",
      link:"tel:/*444*44#",
      icon:"",
      banks:[banksName.BPA]
    },

    {
      //Consulta saldo
      title:"Consultar saldo",
      description:"Consultar saldo de la tarjeta",
      link:"tel:/*444*46#",
      icon:"",
      banks:[banksName.BPA]
    },

    {
      //Consultar servios
      title:"Consultar servios",
      description:"Consultar factura del servicio",
      link:"tel:/*444*47#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Últimas operaciones
      title:"Últimas operaciones",
      description:"Consultar últimas 10 operaciones",
      link:"tel:/*444*48#",
      icon:"",
      banks:[banksName.BPA]
    },
 
    

    


  ];
  return (
    <div className="App">
      <header className="App-header">
{/* 
      <Menu noOverlay >
      <CardList actions={burgerMenuActions} ></CardList>
      </Menu> */}
      <CardList actions={commonActions} ></CardList>
      
      </header>
      
    </div>
  );
}

export default App;
