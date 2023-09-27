import { useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom"


function Account() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/login")
        }
    }, [])
    const subtitle = "In today's lesson, I'm going to talk to you about different ways to answer everybody's favorite part of an interview and that's sarcasm obviously.";

    const [selectedWord, setSelectedWord] = useState(null);
  
    const handleWordClick = (word, meaning, pronunciation) => {
      setSelectedWord({ word, meaning, pronunciation });
    };
  
    return (
      <div className="App">
        <div className="subtitle-container">
          {subtitle.split(' ').map((word, index) => (
            <span
              key={index}
              className="word"
              onClick={() => handleWordClick(word, 'Meaning of ' + word, 'Pronunciation of ' + word)}
            >
              {word}
            </span>
          ))}
        </div>
        {selectedWord && (
          <div className="word-details">
            <h3>{selectedWord.word}</h3>
            <p>Meaning: {selectedWord.meaning}</p>
            <p>Pronunciation: {selectedWord.pronunciation}</p>
          </div>
        )}
      </div>
    );
  

}
export default Account