import react from "@vitejs/plugin-react";
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

 import * as Yup from 'yup';

 state = {
    meter: '',
    money: '',
  }

  handleChange = event => {
    this.setState({ meter: event.target.meter },{money: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const transac = {
      meter: this.state.meter,
      money: this.state.money
    };

    axios.post(`http://localhost:4008`, { transactionSchema })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


 const getToken=()=>{


 }


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

 

 export const FormBuy = () => (

   <div>

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

         <Form>

           <Field name="meter" placeholder="meter number"/>

           {errors.meter && touched.meter ? (

             <div>{errors.meter}</div>

           ) : null}

           <Field name="money" />

           {errors.money && touched.money ? (

             <div>{errors.money}</div>

           ) : null}

          

           <button type="submit" className='bg-green text-white'>Submit</button>

         </Form>

       )}

     </Formik>

   </div>

 );

 export default FormBuy