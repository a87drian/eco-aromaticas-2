import React , {useState} from 'react'
import { getFirestore } from '../Firebase'

export const AbmItem = () => {
    const [error, setError] = useState();
    const [item, setItem] = useState(
        {
        category: '',
        image: '',
        name: '',
        price: 0,
        stock: 0
        }
    )
    const createItem = (id, value, type) => {
        const newValue = type === 'number' ? Number(value) : value
        const newItem = {...item, [id]: newValue}
        setItem(newItem)
    
    }
    const saveOnFirebase = async () => {
        const db = getFirestore();
        const response = await db.collection('items').add(item)
        console.log(response.id)
        }
    

    const isEmpty = () => {
        const itemKeys = Object.keys(item);
        return itemKeys.some((key) => item[key]==='')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(isEmpty()){
            setError('Hay campos vacíos')
            
        }else {
            saveOnFirebase()
        }
    }

    return (
        <div className="container-fluid">

            <div className="row">

            <div className="col"></div>
            <div className="col">
                <form onSubmit={handleSubmit}   >
                    <div className="form-group">
                    <label htmlFor={"category"}>Categoría</label>
                    <input onChange={({target}) =>createItem('category', target.value, 'string')} type="text" className="form-control" id="category" />
                    <label htmlFor="image">Imagen</label>
                    <input onChange={({target}) =>createItem('image', target.value, 'string')} type="text" className="form-control" id="image" /> 
                    <label htmlFor="name">Nombre</label>
                    <input onChange={({target}) =>createItem('name', target.value, 'string')} type="text" className="form-control" id="name" />                      
                    <label htmlFor="price">Precio</label>
                    <input onChange={({target}) =>createItem('price', target.value, 'number')} type="number" className="form-control" id="price" />
                    <label htmlFor="stock">Stock</label>
                    <input onChange={({target}) =>createItem('stock', target.value, 'number')} type="number" className="form-control" id="stock" />
                    </div>

                    <button type="submit"  className="btn btn-primary">Crear</button>
                </form>
                {error && <div className="alert alert-danger" role="alert">
                                {error}
                            </div>}
            </div>
            <div className="col"></div>
            </div>
        </div>

    )
}


