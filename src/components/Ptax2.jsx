import React, { useEffect, useState } from 'react';
import './Ptax2.css'

export default function Ptax2() {
    // States 10
    const [cotC1, setCotC1] = useState();
    const [cotV1, setCotV1] = useState();
    const [dt1, setDt1] = useState();

    // States 11
    const [cotC2, setCotC2] = useState();
    const [cotV2, setCotV2] = useState();
    const [dt2, setDt2] = useState();

    // States 12
    const [cotC3, setCotC3] = useState();
    const [cotV3, setCotV3] = useState();
    const [dt3, setDt3] = useState();

    // States 13
    const [cotC4, setCotC4] = useState();
    const [cotV4, setCotV4] = useState();
    const [dt4, setDt4] = useState();

    // States FECHAMENTO PTAX
    const [cotC5, setCotC5] = useState();
    const [cotV5, setCotV5] = useState();
    const [dt5, setDt5] = useState();

    // Data atual
    const [dia, setData] = useState();

    useEffect(() => {
        const date = new Date();
        const mes = date.getMonth() + 1;
        const dia = date.getDate();
        const ano = date.getFullYear();
        return setData(`${mes}-${dia}-${ano}`)
    }, [0]);

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='USD'&@dataCotacao='${dia}'&$top=100&$format=json&$select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim`;

    // Janela 10:00

    // Compra abebrtura 10:00
    const getPtax1Compra = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotC1(data.value[0].cotacaoCompra)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Venda abebrtura 10:00
    const getPtax1Venda = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotV1(data.value[0].cotacaoVenda)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Data 10:00
    const getPtax1Dt = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setDt1(data.value[0].dataHoraCotacao)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }

    // Janela 11:00

    // Compra abebrtura 11:00
    const getPtax2Compra = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotC2(data.value[1].cotacaoCompra)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Venda abertura 11:00
    const getPtax2Venda = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotV2(data.value[1].cotacaoVenda)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Data 11:00
    const getPtax2Dt = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setDt2(data.value[1].dataHoraCotacao)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }

    // Janela 12:00

    // Compra abebrtura 12:00
    const getPtax3Compra = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotC3(data.value[2].cotacaoCompra)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Venda abebrtura 12:00
    const getPtax3Venda = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotV3(data.value[2].cotacaoVenda)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Data 12:00
    const getPtax3Dt = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setDt3(data.value[2].dataHoraCotacao)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Janela 13:00

    // Compra abebrtura 13:00
    const getPtax4Compra = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotC4(data.value[3].cotacaoCompra)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Venda abebrtura 13:00
    const getPtax4Venda = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotV4(data.value[3].cotacaoVenda)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Data 13:00
    const getPtax4Dt = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setDt4(data.value[3].dataHoraCotacao)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }

    // FECHAMENTO PTAX

    // Compra abebrtura 13:00
    const getPtax5Compra = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotC5(data.value[4].cotacaoCompra)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Venda abebrtura 13:00
    const getPtax5Venda = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setCotV5(data.value[4].cotacaoVenda)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }
    // Data 13:00
    const getPtax5Dt = (cotacao) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                return setDt5(data.value[4].dataHoraCotacao)
            })
            .catch((error) => {
                console.log(error);
            });
        return cotacao
    }

    // Margem mínima e máxima

    // const calcDelta = (c, v) => {
    //     const res = (v/c -1) * 100
    //     return res.toFixed(5)
    // }
    // const deltaP1 = calcDelta(cotC1, cotV1)

    // const calcMin = (v, delta) => {
    //     const res = v - delta
    //     return res.toFixed(4)
    // }
    

    return (
        <div className="container-fluid">
            <div className="indicadores">
                <div className="ptax-area">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    PTAX
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="ptax">
                                        <div className="ptax-area">
                                            <div className="janela">
                                                <strong>Janela 10:00</strong>
                                            </div>
                                            {/* <p className='compra'>Compra: {getPtax1Compra(cotC1)}</p> */}
                                            <p className='venda'>P1: {getPtax1Venda(cotV1)}</p>
                                            {/* <p className='venda'>Mínima: {calcMin(cotV1, deltaP1)}</p> */}
                                            {/* <p className='compra'>DELTA: {calcDelta(cotC1, cotV1)}</p> */}
                                            {/* <p className='venda'>PTAX: {calcPtax(cotV1, delta)}</p> */}
                                            <p className='data'>{getPtax1Dt(dt1)}</p>

                                        </div>
                                        <div className="ptax-area">
                                            <div className="janela">
                                                <strong>Janela 11:00</strong>
                                            </div>
                                            {/* <p className='compra'>Compra: {getPtax2Compra(cotC2)}</p> */}
                                            <p className='venda'>P2: {getPtax2Venda(cotV2)}</p>
                                            <p className='data'>{getPtax2Dt(dt2)}</p>

                                        </div>
                                        <div className="ptax-area">
                                            <div className="janela">
                                                <strong>Janela 12:00</strong>
                                            </div>
                                            {/* <p className='compra'>Compra: {getPtax3Compra(cotC3)}</p> */}
                                            <p className='venda'>P3: {getPtax3Venda(cotV3)}</p>
                                            <p className='data'>{getPtax3Dt(dt3)}</p>

                                        </div>
                                        <div className="ptax-area">
                                            <div className="janela">
                                                <strong>Janela 13:00</strong>
                                            </div>
                                            {/* <p className='compra'>Compra: {getPtax4Compra(cotC4)}</p> */}
                                            <p className='venda'>P4: {getPtax4Venda(cotV4)}</p>
                                            <p className='data'>{getPtax4Dt(dt4)}</p>

                                        </div>
                                        <div className="ptax-area-fechamento">
                                            <div className="janela">
                                                <strong>Fechamento PTAX</strong>
                                            </div>
                                            {/* <p className='compra'>Compra: {getPtax5Compra(cotC5)}</p> */}
                                            <p className='venda'>OFICIAL: {getPtax5Venda(cotV5)}</p>
                                            <p className='data'>{getPtax5Dt(dt5)}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
