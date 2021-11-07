import React, { Component, useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

const RankginApex =() => {

  const [opciones, setOpciones] = useState(
    ['hans+', 'Caloga', 'Parrot', 'Deezer', 'Kameleoon', 'Elia System Operator', 'DPD group', 'Sinequa']
  );

  const [data, setData] = useState(
    [95, 40, 35, 50, 89, 60, 70, 91, 125]
  );

  const [estado, setEstado] = useState(
    {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: opciones
        },
        plotOptions: {
            bar: {
              distributed: true,
              horizontal: true, //horizontal bar chart
            },
          },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
          '#f48024', '#69d2e7'
        ],
      },
      series: [{
        name: 'score',
        data: data
      }]
    }
  );
  
  // use efect para setaer opciones y data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`http://168.181.186.118:9093/democompany/ranking20`);
        
			  resp = await resp.json();
        
        // armo array para filas y datos
        var respuesta = resp
        var auxIdes=[], auxNom=[];
        respuesta.map(elemento => {
          auxIdes.push(elemento.score)
          auxNom.push(elemento.company_name)
        });
        setData(auxIdes);
        setOpciones(auxNom);
        console.log(auxIdes)
        console.log(auxNom)

        
        console.log(resp.COMPANY_ID)
			  } catch(error) {
				  console.error(error);
			  }
		};
		getData().then(() => setLoading(false));
    }, []);


    const getGrafico = ()=>{
      console.log("entro click boton");
      const getData1 = async () => {
        try {
          let resp = await fetch(`http://168.181.186.118:9093/democompany/ranking20`);
          
          resp = await resp.json();
          
          // armo array para filas y datos
          var respuesta = resp
          var auxIdes=[], auxNom=[];
          respuesta.map(elemento => {
            auxIdes.push(elemento.score)
            auxNom.push(elemento.company_name)
          });
          setData(auxIdes);
          setOpciones(auxNom);
          console.log(auxIdes)
          console.log(auxNom)
  
          
          console.log(resp.COMPANY_ID)
          } catch(error) {
            console.error(error);
          }
          
      };
    getData1();
    setEstado(
      {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: opciones
          },
          plotOptions: {
              bar: {
                distributed: true,
                horizontal: true, //horizontal bar chart
              },
            },
          colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
          ],
        },
        series: [{
          name: 'score',
          data: data
        }]
      }
    );
    }

  return (
    <div className="content">
        
        <Chart options={estado.options} series={estado.series} type="bar" width={950} height={680} />
        <button onClick={getGrafico}>Refresh</button>
    </div>
  )

}

export default RankginApex;

/*
export default class RankginApex extends Component {

/*
    const [data1, setData]= useState([]);


    
    constructor(props) {
        super(props);
      
        this.state = {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: ['hans+', 'Caloga', 'Parrot', 'Deezer', 'Kameleoon', 'Elia System Operator', 'DPD group', 'Sinequa']
            },
            plotOptions: {
                bar: {
                  distributed: true,
                  horizontal: true, //horizontal bar chart
                },
              },
            colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
              '#f48024', '#69d2e7'
            ],
          },
          series: [{
            name: 'score',
            data: [95, 40, 35, 50, 89, 60, 70, 91, 125]
          }]
        }
      }

    render() {
        return (
            <div className="content">
                
                <Chart options={this.state.options} series={this.state.series} type="bar" width={750} height={480} />
            </div>
        )
    }
}


*/