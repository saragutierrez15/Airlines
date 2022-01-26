import { ChangeEvent, useState } from "react";

const useForm = <T extends object>(initState: T)=> {
    const [form, setForm] = useState(initState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleReset  = ()=> {
        setForm(initState)
    }
    return {
        form,
        handleChange,
        handleReset
    }
};

export default useForm;
