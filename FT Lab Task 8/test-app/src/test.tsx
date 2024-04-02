function Test() {

    return (
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <p key={i}>Hello World</p>
          ))}
        </div>
      );
}

export default Test;