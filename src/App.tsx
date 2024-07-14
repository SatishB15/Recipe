import './App.css'
import OmelettePicture from './assets/image-omelette.jpeg';

function App() {

  return (
    <>
      <main>
        <div className="card">
          <div className="card-header">
            <img src={OmelettePicture} alt="Omelette-image" />
          </div>
          <div className="card-body">
            <h1 className='recipe-title'>
              Simple Omelette Recipe
            </h1>

            <p className='recipe-description'>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <div className="preparation-time">
              <h3>Preparation time</h3>
              <ul>
                <li><strong>Total:</strong> Approximately 10 minutes</li>
                <li><strong>Preparation:</strong> 5 minutes</li>
                <li><strong>Cooking:</strong> 5 minutes</li>
              </ul>
            </div>

            <div className="ingredients">
              <h2>
                Ingredients
              </h2>
              <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </div>

            <div className="instructions">
              <h2>
                Instructions
              </h2>
              <ol>
                <li>
                  <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                  You can add a tablespoon of water or milk for a fluffier texture.
                </li>
                <li>
                  <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
                </li>
                <li>
                  <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                  the eggs evenly coat the surface.
                </li>
                <li>
                  <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the omelette.
                </li>
                <li>
                  <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
                  fillings. Let it cook for another minute, then slide it onto a plate.
                </li>
                <li>
                  <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                </li>
              </ol>
            </div>

            <section className="nutrition">
              <h2>Nutrition</h2>
              <p>The table below shows nutritional values per serving without the additional fillings.</p>
              <table>
                <tr>
                  <th scope="row">Calories</th>
                  <td className='nutritional-value'>277kcal</td>
                </tr>
                <tr>
                  <th scope="row">Carbs</th>
                  <td className='nutritional-value'>0g</td>
                </tr>
                <tr>
                  <th scope="row">Protein</th>
                  <td className='nutritional-value'>20g</td>
                </tr>
                <tr>
                  <th scope="row">Fat</th>
                  <td className='nutritional-value'>22g</td>
                </tr>
              </table>
            </section>

          </div>
        </div>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend
          Mentor</a>.
        Coded by <a href="https://www.linkedin.com/in/satish-birhade" target="_blank" rel="noopener">Satish Birhade</a>.
      </footer>
    </>
  )
}

export default App
