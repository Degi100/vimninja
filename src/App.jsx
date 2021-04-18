import "./css/App.css";
function App() {
  return (
    <>
      <div className="top_layer">
        <div className="left_top_layer">
          <div className="white_belt">White Belt Commands Layer</div>
          <div className="yellow_belt">Yellow Belt Commands Layer</div>
        </div>
        <div className="middle_top_layer">
          <div className="orange_belt">Orange Belt Commands Layer</div>
        </div>
        <div className="right_top_layer">
          <div className="purple_belt">Purple Belt Commands Layer</div>
        </div>
      </div>
      <div className="center_layer">Center Layer</div>
      <div className="bottom_layer">
        <div className="left_bottom_layer">
          <div className="green_belt">Green Belt Commands</div>
          <div className="blue_belt">Blue Belt Commands</div>
        </div>
        <div className="right_bottom_layer">
          <div className="brown_belt">Brown Belt Commands</div>
          <div className="black_belt">Black Belt Commands</div>
          <div className="master_belt">Master Belt Commands</div>
          <div className="master1_belt">Master Advance Belt Commands</div>
          <div className="master2_belt">Master Pro Belt Commands</div>
        </div>
      </div>
    </>
  );
}

export default App;
