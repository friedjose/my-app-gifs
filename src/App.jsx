import { useState } from 'react';

import AddCategory from './Components/myCategoria';
import GridGif from './Components/myGridCategory';
import ListGroup from './Components/ListGroup';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  return (
    <div className="container mt-3 mb-5">
      <h1 className="mb-3">Gif Expert</h1>

      <AddCategory 
        categories={categories} 
        setCategories={setCategories} 
      />

      <ListGroup 
        categories={categories} 
        onSelectCategory={setSelectedCategory} 
      />

      {/* Mostrar solo los gifs de la categoría seleccionada */}
      {selectedCategory && (
        <GridGif key={selectedCategory} category={selectedCategory} />
      )}
    </div>
  );
};

export default App;

