import React from "react";
import {Editor} from "@toast-ui/editor";
import PropTypes from "prop-types";
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends React.Component {
    rootEl = React.createRef();
    editor = null;

    componentDidMount() {
        this.editor = new Editor({
            el: this.rootEl.current,
            hideModeSwitch: true,
        });
        this.editor.addHook("change", this.handleOnChange);
    }

    handleOnChange = () => {
        this.props.onContentChange(this.editor.getMarkdown());
    };

    render() {
        return <div ref={this.rootEl}/>;
    }
}

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func,
};

export default MarkdownEditor;