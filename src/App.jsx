import { useState } from "react";
import { CORE_CONCEPTS } from "./data-with-examples.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function onClickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }
   let tabcontent = "Please click a button";
  if (selectedTopic) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title} </h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((ele)=>( <CoreConcepts {...ele} key={ele.title} ></CoreConcepts>) )}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected= { selectedTopic==='components'}
              onClick={() => {
                onClickHandler("components");
              }}
            >
              Components
            </TabButton>
            <TabButton isSelected= { selectedTopic==='jsx'}
              onClick={() => {
                onClickHandler("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton isSelected= { selectedTopic==='props'}
              onClick={() => {
                onClickHandler("props");
              }}
            >
              Props
            </TabButton>
            <TabButton isSelected= { selectedTopic==='state'} 
              onClick={() => {
                onClickHandler("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabcontent}
        </section>
      </main>
    </div>
  );
}

export default App;
