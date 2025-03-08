import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef(null);
    const [loading,setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target:{name,value}}) => {
        setForm({...form,[name]:value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_g9aprbl",
                "template_2hrsc0s",{
                    from_name:form.name,
                    to_name:'Mayank',
                    from_email:form.email,
                    to_email: 'mayank18157@iiitd.ac.in',
                    message:form.message
                },
                "VkRjUvPbIIFy7EQc1")
                setLoading(false);
                alert("Your message is sent")
                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
        } catch (error) {
            setLoading(false);
            console.log("Something went wrong",error)
            alert('Something went wrong')

        }
        

    }
    // service_g9aprbl
    // template_q50686p
  
    return (


    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" className='absolute min-h-screen inset-0' alt="terminal background" />
             <div className='contact-container'>
                <h3 className='head-text'>Contact Me</h3>
                <p className='text-lg text-white-600'>Whether you're looking to build a new website, improve your existing platform or bring a unique project to life, I'm here to help.</p>

                <form action="" ref={formRef} onSubmit={handleSubmit} className='flex flex-col mt-12 space-y-7'>
                    <label className='space-y-3' htmlFor="">
                        <span className='field-label'>Full Name</span>
                        <input 
                        type="text" 
                        name='name' 
                        value={form.name} 
                        onChange={handleChange} className='field-input'
                        required 
                        placeholder='John Doe'/>
                    </label>
                    <label className='space-y-3' htmlFor="">
                        <span className='field-label'>Email</span>
                        <input 
                        type="email" 
                        name='email' 
                        value={form.email} 
                        onChange={handleChange} className='field-input'
                        required 
                        placeholder='JohnDoe@gmail.com'/>
                    </label>
                    <label className='space-y-3' htmlFor="">
                        <span className='field-label'>Your Message</span>
                        <textarea 
                        name='message' 
                        value={form.message} 
                        onChange={handleChange} className='field-input'
                        required 
                        rows={5}
                        placeholder="Hi, I'm intrested in..."/>
                    </label>
                    <button className='field-btn'
                    type='submit'
                    disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                    </button>
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact