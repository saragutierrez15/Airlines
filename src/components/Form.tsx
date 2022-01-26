import Swal from "sweetalert2";
import useForm from "../hooks/useForm";

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: number | string;
    age: number | string
}

const Form = () => {

    const { form, handleChange, handleReset } = useForm<FormData>({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: ''
    });

    const { fullName, email, phoneNumber, age } = form

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (fullName && email && phoneNumber && age) {
            console.log(form);
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Información enviada con éxito, estaremos en contacto contigo',
                showConfirmButton: false,
                timer: 5000
            });
            handleReset()
        } else {
            console.log('error de envio');
            Swal.fire({
                position: 'center',
                icon: 'warning',
                text: 'verifique la información',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='form'>
                <label>Nombre completo:</label>
                <br />
                <input
                    className='input'
                    type='text'
                    name='fullName'
                    value={fullName}
                    onChange={handleChange}
                    required
                />

                <label>Email:</label>
                <br />
                <input
                    className='input'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <label>Celular:</label>
                <br />
                <input
                    className='input'
                    type='number'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                />
                <label>edad:</label>
                <br />
                <input
                    className='input'
                    type='number'
                    name='age'
                    value={age}
                    min='18'
                    max='100'
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='btn'>Enviar</button>
        </form>
    );
};

export default Form;
