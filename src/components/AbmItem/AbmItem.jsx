import React from 'react'

export const AbmItem = () => {
    const createItem = (e) => {
        console.log(e)

    }
    return (
        <div className="container-fluid">

            <div className="row">

            <div className="col"></div>
            <div className="col">
                <form>
                    <div class="form-group">
                    <label for="categoria">Categoría</label>
                    <input type="text" class="form-control" id="categoria" />
                    <label for="image">Imagen</label>
                    <input type="text" class="form-control" id="image" /> 
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" />                      
                    <label for="price">Precio</label>
                    <input type="number" class="form-control" id="price" />
                    <label for="price">Stock</label>
                    <input type="number" class="form-control" id="price" />
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={e => createItem(e.target.value)}>Crear</button>
                </form>
            </div>
            <div className="col"></div>
            </div>
        </div>

    )
}


