import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

 import * as Yup from 'yup';



 const transactionSchema = Yup.object().shape({

   money: Yup.string()

     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),

   meter: Yup.string()

     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),

   



 });

 
 export const FormBuy = () => {
 const [state, setstate] = useState({
  meter: '',
  money: '',
})

  const handleChange =(event) => {
    this.setState({ meter: event.target.meter },{money: event.target.value});
  }

 const handleSubmit = event => {
    event.preventDefault();

    const transac = {
      meter: this.state.meter,
      money: this.state.money
    };

    axios.post(`http://localhost:4008/elect/api/tokens/purchase`, { transactionSchema })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

return(
  <div className="justify-center w-full ml-20">

  <h1>Buy Electricity</h1>

  <Formik

    initialValues={{
      meter: '',
      money: '',
    }}

    validationSchema={transactionSchema}

    onSubmit={values => {

      // same shape as initial values

      console.log(values);

    }}

  >

    {({ errors, touched }) => (

      <Form className="border-black m-20 space-y-6 ">
        

        <Field name="meter" placeholder="meter number" className= "gap-y-2 border-2 border-gray-600 block"/>

        {errors.meter && touched.meter ? (

          <div>{errors.meter}</div>

        ) : null}

        <Field name="money" placeholder="money" className= "gap-y-2 border-2  border-gray-600  block"/>

        {errors.money && touched.money ? (

          <div>{errors.money}</div>

        ) : null}

       

        <button type="submit" className='bg-black text-white border8 rounded-2xl h-16 w-40'>Submit</button>

      </Form>

    )}

  </Formik>

</div>
)

           }

 export default FormBuy