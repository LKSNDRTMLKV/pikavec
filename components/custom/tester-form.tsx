import React from 'react';

interface Product {
    id: number;
    name: string;
    price: DoubleRange;
    description: string;
    image: string;
}

const TesterForm = () => {

    const [products, setProducts] = React.useState<Product[]>([]);
    const apiUrl : string = "http://localhost:3000/api/tester";




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    }


    return (
        <div>
            <h1>Tester Form</h1>
        </div>
    );
}
export default TesterForm;