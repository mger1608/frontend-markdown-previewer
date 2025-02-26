console.log(window.marked);

const startingMarkdown = `
# Welcome to my Markdown Previewer!

## A Quick Intro

Here's a [link to freeCodeCamp](https://www.freecodecamp.org) for more learning.

You can use \`inline code\` like this to highlight small snippets.

\`\`\`javascript
// This is a code block
function sayHello() {
  return "Hello, world!";
}
\`\`\`

Here's a short list:
- Learn to code
- Build projects
- Have fun

> This is a blockquote: Coding is a journey, not a race.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

This text is **bolded** for emphasis!
`;

function getMarkedObject(text) {
  let newMarkdown = window.marked.parse(text);
  console.log(newMarkdown);
  return { __html: newMarkdown };
}

const Editor = (props) => {
  return (
    <textarea id = "editor" className = "form=controls" type = "text" onChange = {props.onChange} value = {props.value} />
  );
}

const Previewer = (props) => {
  return (
    <div id = "preview" dangerouslySetInnerHTML = {getMarkedObject(props.value)} />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: startingMarkdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      markdown: e.target.value
    });
  }
  
  render() {
    return (
      <body>
        <div id = "app">
          <h1 id = "header" className = "text-center">Markdown Editor</h1>
          <div id = "main">
            <Editor onChange = {this.handleChange} value = {this.state.markdown} />
            <Previewer value = {this.state.markdown} />
          </div>
        </div>
      </body>
    );
  }
}

// Render to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
