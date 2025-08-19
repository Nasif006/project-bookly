import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Books() {
  const [list,setList]=useState([]);
  const [categories, setCategories]=useState([]);
  const [author, setAuthor]=useState([]);
  // const [colours, setColours]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            name:'',
            description:'',
            price:'',
            category_id:'',
            author_id:'',
            is_featured:'',
            review:''
        });
    getCate();
    getAuthor();
    // getColour();
    setShow(true);
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`books_crud/list.php`)
    setList(res.data);
  }
  const getCate = async (e) => {
    let res = await axios.get(`crud_common/list.php?table_name=category`)
    setCategories(res.data);
  }
  const getAuthor = async (e) => {
    let res = await axios.get(`crud_common/list.php?table_name=author`)
    setAuthor(res.data);
  }
  // const getColour = async (e) => {
  //   let res = await axios.get(`crud_common/list.php?table_name=colours`)
  //   setColours(res.data);
  // }
  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        name:e.target.name.value,
        description:e.target.description.value,
        price:e.target.price.value,
        category_id:e.target.category_id.value,
        author_id:e.target.author_id.value,
        is_featured:e.target.is_featured.value,
        // review:e.target.review.value,
    }
    
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
    for (let i = 0; i < selectedfile.length; i++) {
      formData.append('files[]', selectedfile[i])
    }
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        url=`books_crud/update.php`;
      }else{
        url=`books_crud/add.php`;
      }
     
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
    getCate();
    getAuthor();
    // getColour();
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`books_crud/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Book</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        
        <table className='mt-5 table table-bordered'>
          <thead>
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>category</th>
              <th>Author</th>
              <th>Featured</th>
              <th>Review</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              <td>{d.cat_name}</td>
              <td>{d.auth_name}</td>
              <td>{d.is_featured}</td>
              <td>{d.review}</td>
              <td><img src={`${process.env.REACT_APP_API_URL}${d.image}`} width="100px"/></td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>


      <Modal size="lg" show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' defaultValue={inputs.name} className='form-control' name="name" id='name'/>
                </div>
              </div>
              <div className='col-sm-3'>
                <div className='form-group'>
                  <label htmlFor='price'>Price</label>
                  <input type='text' defaultValue={inputs.price} className='form-control' name="price" id='price'/>
                </div>
              </div>
              {/* <div className='col-sm-3'>
                <div className='form-group'>
                  <label htmlFor='discount'>Discount</label>
                  <input type='text' defaultValue={inputs.discount} className='form-control' name="discount" id='discount'/>
                </div>
              </div> */}
              <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='category_id'>Category </label>
                    {categories.length > 0 && (
                    <select defaultValue={inputs.category_id} className='form-control' name="category_id" id='category_id'>
                      <option value="">Select Category</option>
                        {categories.map((d, key) =>
                          <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </select>
                    )}
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='author_id'>Author </label>
                    {author.length > 0 && (
                    <select defaultValue={inputs.author_id} className='form-control' name="author_id" id='author_id'>
                      <option value="">Select Author</option>
                        {author.map((d, key) =>
                          <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </select>
                    )}
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='is_featured'>featured </label>
                    <select defaultValue={inputs.is_featured} className='form-control' name="is_featured" id='is_featured'>
                      <option key={0} value="">Select option</option>
                      <option key={1} value="1">Yes</option>
                      <option key={2} value="0">No</option>
                    </select>
                </div>
              </div>
              {/* <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='colour_id'>Colour </label>
                    {colours.length > 0 && (
                    <select defaultValue={inputs.colour_id} className='form-control' name="colour_id" id='colour_id'>
                      <option value="">Select Category</option>
                        {colours.map((d, key) =>
                          <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </select>
                    )}
                </div>
              </div> */}


              <div className='col-sm-12'>
                <div className='form-group'>
                  <label htmlFor='description'>Description</label>
                  <textarea defaultValue={inputs.description} className='form-control' name="description" id='description'></textarea>
                </div>
              </div>
              {/* <div className='col-sm-12'>
                <div className='form-group'>
                  <label htmlFor='specification'>Specification</label>
                  <textarea defaultValue={inputs.specification} className='form-control' name="specification" id='specification'></textarea>
                </div> 
              </div>*/}
              {/* <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='is_featured'>featured </label>
                    <select defaultValue={inputs.is_featured} className='form-control' name="is_featured" id='is_featured'>
                      <option key={0} value="">Select option</option>
                      <option key={1} value="1">Yes</option>
                      <option key={2} value="0">No</option>
                    </select>
                </div>
              </div> */}
              {/* <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='is_inspired'>Inspired </label>
                    <select defaultValue={inputs.is_inspired} className='form-control' name="is_inspired" id='is_inspired'>
                      <option key={0} value="">Select option</option>
                      <option key={1} value="1">Yes</option>
                      <option key={2} value="0">No</option>
                    </select>
                </div>
              </div> */}
              <div className='col-sm-4'>
                <div className='form-group'>
                  <label htmlFor='image'>Photo</label>
                  <input type='file' onChange={handelFile} className='form-control' name='image' id='image'/>
                </div>
              </div>

            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Books;
