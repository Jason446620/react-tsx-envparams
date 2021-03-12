import * as React from 'react';
const {env} = process;

interface IProps {
  countBy?: number;
  urlBy?:string;
}

interface IState {
  count: number;
  url:string
}

class Description extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
    urlBy:"//"
  };

  public state: IState = {
    count: 0,
    url:"http:"
  };

  public getJsonData = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };

  
  public getJsonDataStr = () => {
    const urlBy: string = this.props.urlBy!;
    const url = this.state.url + urlBy + env.REACT_APP_PUBLIC_URL;
    this.setState({ url });
  };

  public render() {
    return (
      <div>
        <p>My favorite number is {this.state.url}</p>
        <button onClick={this.getJsonDataStr}>Get Data</button>
      </div>
    );
  }
}

export default Description;
