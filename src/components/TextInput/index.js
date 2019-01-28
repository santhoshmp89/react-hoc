import React, {Component} from 'react';
import PropTypes from 'react';
import Tag from './Tag';

export default class TextInput extends Component {
    constructor (props) {
        super (props);
        this.state = {
            inputVal: '',
            tags: [],
        };
    }

  handleValue = e => {
      this.setState ({
          inputVal: e.target.value,
      });
  };

  addTag = e => {
      e.persist ();
      const inputVal = e.target.value;
      if (inputVal.trim () !== '' && (e.which === 13 || e.which === 32)) {
          let tag = inputVal.trim ().split (' ');
          this.setState (
              {
                  tags: [...this.state.tags, tag],
              },
              () => {
                  e.target.value = '';
              }
          );
      }
  };

  clearTag = val => {
      const tags = this.state.tags.filter (ele => {
          return ele !== val;
      });
      this.setState ({
          tags,
      });
  };

  render () {
      TextInput.idVal = TextInput.idVal + 1;
      return (
          <div>
              <div className="tags">
                  {this.state.tags &&
            this.state.tags.map ((ele, key) => {
                return <Tag name={ele} clearTag={this.clearTag} />;
            })}
              </div>
              <input
                  type="text"
                  id={`text-${TextInput.idVal}`}
                  name={`text-${TextInput.idVal}`}
                  onKeyUp={e => this.addTag (e)}
              />
          </div>
      );
  }
}

TextInput.idVal = 1;

TextInput.defaultProps = {
    id: `text`,
    name: `text`,
};
