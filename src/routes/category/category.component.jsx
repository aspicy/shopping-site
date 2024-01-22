import { CategoryContainer, Title } from "./category.styles";
import { useContext, useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
            {
                // Safeguarding the component so that it will render only when actual data is present
                // only render products.map() when products have a value.
                // Doing this because we are fetching store data asynchronously when component mounts.
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;