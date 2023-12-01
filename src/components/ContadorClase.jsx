import React, {Component} from "react";


class ContadorClase extends Component{
 
    constructor(props){
        super(props);
        this.state ={
            conteo: 0,
        };
    }

    incrementar = () => {
        this.setState((prevState) => ({ conteo: prevState.conteo +1}));
    };

    reducir = () =>{
        this.setState((prevState) => ({ conteo: prevState.conteo -1}));
    }

    render (){
        
        const { conteo } = this.state;

        return(
           
            <div>
                <h1 text='Contador de Cliks' />   
                <p style={{marginLeft: 60, fontSize: 50, textAlign: "center"}}>Conteo: {conteo} </p>
                <button onClick={this.incrementar} style={{marginRight:30, marginLeft:830,  fontSize: 22}} >Sumar Clicks</button>  
                <button onClick={this.reducir} style={{fontSize: 22}} >Reducir Cliks</button>   
            </div>
            
        );
    }
    
}

export default ContadorClase

