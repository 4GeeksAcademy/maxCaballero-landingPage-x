import React from 'react';

const Footer = () => {
    return (
        <div className='conatiner m-auto'>
            <div className='col-10 m-auto'>
                <div className='row-10 d-flex flex-row'>
                    <div className='col-4 bg-success'>
                        <h3>Direccion</h3>
                        <p>aqui direccion</p>
                    </div>
                    <div className='col-sm-8 bg-danger'>
                        <div className="col-10 mb-2 d-flex flex-row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-3">Dejanos tu correo</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-primary">Enviar</button>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;
