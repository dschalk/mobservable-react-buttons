'use strict'
import React from'react';
import mobservable from 'mobservable';
import {reactiveComponent} from 'mobservable-react';
let reactMixin = require('react-mixin');
export {B2};

@reactiveComponent class GroupNew extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let group = event.target.value;
    if (group == '') {
      return
    } else {
      if( event.keyCode == 13 ) {
        this.props.setGroup(group);
      }
    }
  }
  click (event) {
    let group = event.target.value;
    if (group == '') {
        return
    } else {
      this.props.setGroup(group);
    }
  }
  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Player defined group name:  <input type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
          onClick={this.click.bind(this)} style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

@reactiveComponent class Fibonacci extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let num = event.target.value;
    if (event.keyCode == 13) {
      this.props.fib(num);
    }
  }

  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Enter a number:  <input autoFocus type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
         style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

@reactiveComponent class Fibonacci2 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEnter (event) {
    let num = event.target.value;
    if (event.keyCode == 13) {
      this.props.fib2(num);
    }
  }

  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Enter a number:  <input type="text" id='horse' onKeyDown={this.handleEnter.bind(this)}
         style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

let mouseHandlerx = {
    Abackground: '#000',
    Aborder: 'green',
    Acolor: 'burlywood',
    Asize: 12,
    Bbackground: '#000',
    Bborder: 'green',
    Bcolor: 'burlywood',
    Bsize: 12,
    Cbackground: '#000',
    Cborder: 'green',
    Ccolor: 'burlywood',
    Csize: 12,
    Sbackground: '#000',
    Sborder: 'green',
    Scolor: 'burlywood',
    Ssize: 12,
    rSbackground: 'green',
    rSborder: 'lightgreen',
    rScolor: 'yellow',
    27: '#000',
    270: 'darkred',
    28: 'burlywood',
    37: '#000',
    370: 'darkred',
    38: 'burlywood',
    47: '#000',
    470: 'darkred',
    48: 'burlywood',
    57: '#000',
    570: 'darkred',
    58: 'burlywood',
    67: '#000',
    670: 'darkred',
    68: 'burlywood',
    77: '#000',
    770: 'darkred',
    78: 'burlywood',
    87: '#000',
    870: 'darkred',
    88: 'burlywood',
    97: '#000',
    970: 'darkred',
    98: 'burlywood',
    107: '#000',
    1070: 'darkred',
    108: 'burlywood',
    117: '#000',
    1170: 'darkred',
    118: 'burlywood',
    127: '#000',
    1270: 'darkred',
    128: 'burlywood',
    137: '#000',
    1370: 'darkred',
    138: 'burlywood'
};

let mouseHandler = mobservable.makeReactive(mouseHandlerx);

let temp = [1,1];

let data = mobservable.makeReactive({
  group: 'solo',
  name: '',
  nx: [1,1],
  n: 1,
  w: 1,
  warning: '',
  message: 'Do Not Click Me',
  twoTimes: function() {
    if (this.w === 2) {this.warning = 'If you click me again, I will disappear'; this.message = 'YOU HAVE BEEN WARNED'};
    if (this.w === 3) {
      this.dsp = 'none';
      return;
    };
  },
  dsp: 'inline',
  p: 1,
  p2: 1,
  t: 0,
  t2: 0,
  q: 0,
  q2: 0,
  x: 1,
  f: function([a,b]) {
    temp = [a + b,a];
    return [a + b,a];
  },
  g: function() {
    temp = this.f(temp);
    return temp;
  },
  test: true,
  groupWatch: function() {
    if (this.group === 'GroupA' && this.test) {
      mouseHandler.Abackground = 'green';
      mouseHandler.Aborder = 'lawngreen';
      mouseHandler.Acolor = 'yellow';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    }
    else if (this.group === 'GroupB' && this.test) {
      mouseHandler.Bbackground = 'green';
      mouseHandler.Bborder = 'lawngreen';
      mouseHandler.Bcolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    }
    else if (this.group === 'GroupC' && this.test) {
      mouseHandler.Cbackground = 'green';
      mouseHandler.Cborder = 'lawngreen';
      mouseHandler.Ccolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    }
    else if (this.group === 'solo' && this.test) {
      mouseHandler.Sbackground = 'green';
      mouseHandler.Sborder = 'lawngreen';
      mouseHandler.Scolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
    }
    else if (this.test) {
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = 'burlywood';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = 'burlywood';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = 'burlywood';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = 'burlywood';
    }
  }
});

data.increaseX = () => {
  data.x = data.x + 1;
  return data.x;
}

data.increaseW = () => {
  data.w = data.w + 1;
  return data.w;
}

   data.fib = (x) => {
     let n = 1*x;
     switch (n) {
       case 1:
         return 0;
       case 2:
         return 1;
       case 3:
         return 1;
     }
     if ( n > 3) {
         let xx = 2;
         let k = 0;
         let rf = mobservable.makeReactive(1);
         rf.observe(function(a,b) {
           xx = a+b;
         });
         let a = Date.now();
         for (k=4; k<n; k+=1) {
           rf(xx);
         }
         let b = Date.now();
         data.t = b - a;
         return xx; }
         else return "Enter an integer greater than 0";
   };

data.fib2 = (x) => {
  let n = 1*x;
  switch (n) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 1;
  }
  if ( n > 3) {
      let ar = [2,1];
      let k = 0;
      let rf = function(x) {
        let b = x[0];
        x[0] = x[0] + x[1];
        x[1] = b;
      }
      let a = Date.now();
      for (k=4; k<n; k+=1) {
        rf(ar);
      }
      let b = Date.now();
      data.t2 = b - a;
      return ar[0]; }
      else return "Enter an integer greater than 0";
};

@reactiveComponent class Monad {
  constructor(z) {
    this.x = mobservable.makeReactive(z);

    this.x.bnd = (func) => {
      return func(this.x());
    }
  }
}

let monads = mobservable.makeReactive({
  newMonad: new Monad(0)  
});

let m = new Monad(1);
m.x.observe(function(a,b) {
  console.log('m changed from ' + b + ' to ' + a);
  m3.x(a*a);
});
let m2 = new Monad(1);
let m3 = new Monad(0);

@reactiveComponent class B2 extends React.Component {
  constructor(props) {
    super(props);
    this.mouse = mouseHandler;
    this.data = data;
    this.monads = monads;
    this.m = m.x;
    this.m2 = m2.x;
    this.m3 = m3.x;
    this.state = {
      fibonacci2: 0,
      t2: 0
    }
  }

  f = x => {
    this.m2(x + 1);
    return this.m2;
  }

  fmSubtract1 = w => {
    this.m(w - 1);
    return this.m;
  }

  fmAdd1 = w => {
    this.m(w + 1);
    return this.m;
  }

  monadReturn = w => {
    this.monads.newMonad = new Monad(w);
    return this.monads.newMonad.x;
  }

  fmSquare = w => {
    this.m(w * w);
    return this.m;
  }

  fmAdd_then_Square = w => {
    this.m(w + 1);
    let z = this.m();
    this.m(z * z);
    return this.m;
  }

  reset_1 = () => {
    this.m(1);
    return this.m;
  }

  reset_2 = () => {
    this.m2(1);
    return this.m2;
  }

  reset_3 = () => {
    this.m3(0);
    return this.m3;
  }

  blib = (x) => {
    this.data.p = x;
    this.data.q = this.data.fib(x);
  }

  blib2 = (x) => {
    this.data.p2 = x;
    this.data.q2 = this.data.fib2(x);
  }

  st = () => {
    let x = this.data.fib2;
    let y = fib3();
    let z = [x, y[0], y[1]];
    console.log(z);
    return z;
  }

  setGroup = x => {
    this.data.group = x;
  }

  style8 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

  style9 = (w,x,y,z) => {return {display: w, backgroundColor: x, textAlign: 'left', borderColor: y, outline: 0,
    color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20 }};

  render = () => {
    let twoTimes = this.data.twoTimes;
    let m4 = this.monads.newMonad.x;
    console.log(this);
    let x = this.data.x;
    let g = this.data.g;
    let p = this.data.p;
    let q = this.data.q;
    let p2 = this.data.p2;
    let q2 = this.data.q2;
    let t = this.data.t;
    let t2 = this.data.t2;
    let w = this.data.w;
    let warning = this.data.warning;
    let message = this.data.message;
    let increaseX = this.data.increaseX;
    let increaseW = this.data.increaseW;
    let group = this.data.group;
    let groupWatch = this.data.groupWatch;
    let dsp = this.data.dsp;
    let Abackground = '#000';
    let Aborder = 'green';
    let Acolor = 'burlywood';
    let Bbackground = '#000';
    let Bborder = 'green';
    let Bcolor = 'burlywood';
    let Cbackground = '#000';
    let Cborder = 'green';
    let Ccolor = 'burlywood';
    let Sbackground = '#000';
    let Sborder = 'green';
    let Scolor = 'burlywood';
    let Ubackground = '#000';
    let Uborder = 'green';
    let Ucolor = 'burlywood';
    let Tbackground = '#000';
    let Tborder = 'green';
    let Tcolor = 'burlywood';
    let rAbackground = 'green';
    let rAborder = 'lightgreen';
    let rAcolor = 'yellow';
    let rBbackground = 'green';
    let rBborder = 'lightgreen';
    let rBcolor = 'yellow';
    let rCbackground = 'green';
    let rCborder = 'lightgreen';
    let rCcolor = 'yellow';
    let rSbackground = 'green';
    let rSborder = 'lightgreen';
    let rScolor = 'yellow';
    let cr27 = this.mouse[27];
    let cr270 = this.mouse[270];
    let cr28 = this.mouse[28];
    let cr37 = this.mouse[37];
    let cr370 = this.mouse[370];
    let cr38 = this.mouse[38];
    let cr47 = this.mouse[47];
    let cr470 = this.mouse[470];
    let cr48 = this.mouse[48];
    let cr57 = this.mouse[57];
    let cr570 = this.mouse[570];
    let cr58 = this.mouse[58];
    let cr67 = this.mouse[67];
    let cr670 = this.mouse[670];
    let cr68 = this.mouse[68];
    let cr77 = this.mouse[77];
    let cr770 = this.mouse[770];
    let cr78 = this.mouse[78];
    let cr87 = this.mouse[87];
    let cr870 = this.mouse[870];
    let cr88 = this.mouse[88];
    let cr97 = this.mouse[97];
    let cr970 = this.mouse[970];
    let cr98 = this.mouse[98];
    let cr107 = this.mouse[107];
    let cr1070 = this.mouse[1070];
    let cr108 = this.mouse[108];
    let cr117 = this.mouse[117];
    let cr1170 = this.mouse[1170];
    let cr118 = this.mouse[118];
    let cr127 = this.mouse[127];
    let cr1270 = this.mouse[1270];
    let cr128 = this.mouse[128];
    let cr137 = this.mouse[137];
    let cr1370 = this.mouse[1370];
    let cr138 = this.mouse[138];

    return (
      <div style={{ backgroundColor: '#000', height: 3800, width: '100%', color: '#FFE4C4' }}>
        <br /><br /><br />
          <h1 style={{textAlign: 'center'}} >Reactive Buttons</h1>
        <div style={{width: '40%', marginLeft: 85, float: 'right', marginRight: 2}} >
          <h2 style={{textAlign: 'center'}} >Rollover Buttons</h2>
          <br />
        Current Group:
      <button style={this.style8('blue', 'lightgreen', 'red')} >
        {group}
      </button>
        <br /><br />
          <button onClick={() => {
                  this.data.group = 'GroupA';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupA') {
                  this.data.test = false;
                  this.mouse.Abackground = rAbackground;
                  this.mouse.Aborder  = rAborder;
                  this.mouse.Acolor = rAcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupA') {
                  this.data.test = true;
                  this.mouse.Abackground = Abackground;
                  this.mouse.Aborder  = Aborder;
                  this.mouse.Acolor = Acolor;
                }
              }
            }
              style={this.style8(this.mouse.Abackground,this.mouse.Aborder,this.mouse.Acolor)} >
            GroupA
          </button>

          <button onClick={() => {
                  this.data.group = 'GroupB';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupB') {
                  this.data.test = false;
                  this.mouse.Bbackground = rBbackground;
                  this.mouse.Bborder  = rBborder;
                  this.mouse.Ncolor = rBcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupB') {
                  this.data.test = true;
                  this.mouse.Bbackground = Bbackground;
                  this.mouse.Bborder  = Bborder;
                  this.mouse.Bcolor = Bcolor;
                }
              }
            }
              style={this.style8(this.mouse.Bbackground,this.mouse.Bborder,this.mouse.Bcolor)} >
            GroupB
          </button>

          <button onClick={() => {
                  this.data.group = 'GroupC';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'GroupC') {
                  this.data.test = false;
                  this.mouse.Cbackground = rCbackground;
                  this.mouse.Cborder  = rCborder;
                  this.mouse.Ccolor = rCcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupC') {
                  this.data.test = true;
                  this.mouse.Cbackground = Cbackground;
                  this.mouse.Cborder  = Cborder;
                  this.mouse.Ccolor = Ccolor;
                }
              }
            }
              style={this.style8(this.mouse.Cbackground,this.mouse.Cborder,this.mouse.Ccolor)} >
            GroupC
          </button>

          <button onClick={() => {
                  this.data.group = 'solo';
                  this.data.test = true;
          }}
            onMouseEnter={() => {
              if (group !== 'solo') {
                  this.data.test = false;
                  this.mouse.Sbackground = rSbackground;
                  this.mouse.Sborder  = rSborder;n
                  this.mouse.Scolor = rScolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'solo') {
                  this.data.test = true;
                  this.mouse.Sbackground = Sbackground;
                  this.mouse.Sborder  = Sborder;
                  this.mouse.Scolor = Scolor;
                }
              }
            }
              style={this.style8(this.mouse.Sbackground,this.mouse.Sborder,this.mouse.Scolor)} >
            solo
          </button>
          <br /><br />
          <GroupNew key='GroupNew' setGroup={(x) => {this.data.group = x }} name={this.data.name} />
<br /><br />

          Fibonacci numbers ( [temp][1] ):
          <button style={this.style8(cr27,cr270,cr28)} >
            {temp[1]}
          </button>
          <br /><br />
          Value of data.x:
          <button style={this.style8(cr27,cr270,cr28)} onClick={() => {increaseX()}}
            onMouseEnter={() => {this.mouse[27] = 'blue', this.mouse[270] = 'lightblue', this.mouse[28] = 'yellow'}}
            onMouseLeave={() => {this.mouse[27] = '#000', this.mouse[270] = 'darkred', this.mouse[28] = 'burlywood'}}
            >
            {x}
        </button>
<br /><br />
<h3>Reactive Fibonacci Numbers</h3>
<h3>Using mobservable properties of the fibonacci number</h3>
          <h2> fib({p}) = {q} </h2>
<Fibonacci fib = {this.blib}> </Fibonacci>
          Elapsed time = {t} milliseconds.
          <br />
          The computer code is at <a style={{color: '#f26d6d'}} href="https://github.com/dschalk/mobservable-react-buttons">mobservable-react-buttons</a>
  <br /><br />
<h3>Plain Fibonacci Numbers</h3>
<h3>Ordinary array [a, b] -> [a+b, a]</h3>
          <h2> fib({p2}) = {q2} </h2>
  <Fibonacci2 fib2={this.blib2} > </Fibonacci2>
  <br />Elapsed time = {t2} milliseconds.
  <br /><br />

        The buttons above are inter-connected with one another and with the input box. Click the buttons and enter some text to see how they interact. These are dumned-down buttons from my <a target=" _blank" style={{color: '#f26d6d'}} href="http://machinegun.ninja">Game of Score</a> Haskell websockets multiplayer math game. The buttons presented here demonstrate the full functionality of the rollover effects, along with some other features that don't come with HTML select/option forms.
          When the value of 'data.test' is 'true', data.groupWatch() automatically changes button highlighting when the value of 'data.group' changes. When the mouse enters a button, data.test is set to 'false' allowing the rollover effect to override 'data.groupWatch()'.
          <br /><br />
          The movement from MVC frameworks to Facebook's React to Mr. Weststrate's mobservable-React hybrid seems to portend a progression into a future hybrid not only free from Flux and its progeny, but possibly free even from React's 'state' object, which at first appears to be essential. Now it could be that Facebook's website needs Flux, and would flounder if it were to substitue mobservable for its dispatchers, stores, state object, and Flux. My websockets-react project isn't handling much traffic, but it is fairly complex. The more I convert over to mobservable, the easier it gets to follow code logic and add features. I haven't noticed an deterioration in performance, and I suspect that it can handle heavier loads than the earlier version which held more tightly to Facebook's patterns.  As I move things out of the 'state' object and into mobservable objects, I remove the associated 'setState' code, along with the getter code, and install methods in mobservable-encapsulated objects that cause the application to take care of itself automatically. That is what I did with these buttons.
          <br /><br />
        </div>

        <div style={{width: '45%', float: 'left', marginLeft: 12}} >
          <p>When React renders the the main component (B2), reactive functions merely mentioned in the render function are executed. The variable 'data.x' is not involved in the method 'g', which computes sequential Fibonacci numbers, yet incrementing x causes the next fibonacci number to be displayed. In fact, Rolling over any rollover button, clicking any button, or entering text causes the sequence to progress, unless the rollover, click, or text entry doesn't change anything. This is reassuring evidence that no unnecessary rendering is taking place. </p>
          <p>The line 'let g = this.data.g' in 'render' is all it takes to invoke this ultra-sensitive behavior.
         Note that 'g' is not called and its argument is not modified (that is, not until g modifies it). Being aware of this automatic behavior facilitates writing concise code (it doesn't get more concise than not having to write anything), and avoiding magical bugs (things seeming to happen spontaneously). </p>

       The line 'let increaseX = this.data.increaseX' is also present in 'render()', but rendering does not trigger its execution. The relevant difference between 'increaseX' and 'g' from a practical perspective is that 'g' is defined inside of the reactive data object but 'increaseX' is incorporated into 'data' externally with with the code: 'data.increaseX = ...'. Another way of looking at this is to see that 'g' was inside of 'data' when it was encapsulated, but 'increaseX' was tacked on after encapsulation. The precise explanation for this behavior can only be found in the details of the code.
          <br />
<h3>Discussion of Fibonacci Numbers</h3>
The 1477th number in the Fibonacci sequence is the largest number browsers can handle.<br /><br />
fib(1477) =  1.3069892237633987e+308 <br />
fib(1478) = Infinity<br />
<br />
To see how much overhead is entailed by working with a number created by
"let rf = mobservable.makeReactive(1)", I used the fact that the reactive number had access to its present and previous values to generate the Fibonacci series. Each time the loop calls "rf(xx)", xx is automatically incremented by adding the a and b in
"rf.observe(function(a,b))" 
So, for example, running "rf(xx)" nine times in a loop is all it takes to compute the 9th number in the series.
<br /><br />

On a Chrome browser, I got<br />
 mobservable fib(100,000,000) elapsed time 1883 milliseconds<br />
 and ordinary fib(100,000,000) elapsed time 815 milliseconds.
 On Firefox, I got 1452 and 380 milliseconds and on Opera, 1709 and 760 milliseconds. Repeated computations did not differ segnificantly from one another except that on Chrome and Opera, the first ordinary computation was much faster than the subsequent ones. The data was gathered on a run-of-the-mill Ubuntu 14.04 desktop box.
 <p>All of this was done mainly for amusement, but it did provide some reasurrance that using mobservabale to access current and most recent state will not entail a performance hit. A user requesting fib(1477) won't notice the extra 2 or 3 microseconds involved in getting it through a sequence of mobservable reactive numbers.</p>
 <p>The buttons shown here work fine with React's state and props objects left empty. You might wonder why I use React at all. Mobservable doesn't rely on React. Well, this code is a snippet from my websockets-react project. The complete code is available at <a style={{color: '#f26d6d'}} href="https://github.com/dschalk/websockets-react">https://github.com/dschalk/websockets-react</a>. An explanation of the project is at <a style={{color: '#f26d6d'}} href="https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score">https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score</a>. My server is a modified Haskell Wai-Websockets server. Like mobservable, it does much in a very simple and elegant manner.
 </p>
 <p> I used 'react_mixin', but it is not necessary for the buttons. I used it to grab a React mixin out of 'node_modules' to support autoFocus ('autofocus' in regular HTML).</p>
            <span style={{textAlign: 'center', fontSize: 22}}>Temporary Button</span>
<br />
            Clicking this button does nothing but increment 'data.w', but there there is an observer function named 'data.twoTimes()' that reacts to changes in 'data.w' by mutating 'data.message' and 'data.dsp'. Click the button and see what happens when data.twoTimes changes the values of 'data.message' and 'data.dsp'.
<br />

          <h2 style={{display: dsp, color: 'red'}} > {warning} </h2>
          <button style={this.style9(dsp,cr38,cr370,'#000')} onClick={() => {increaseW()}}
            onMouseEnter={() => {this.mouse[37] = 'blue', this.mouse[370] = 'lightblue', this.mouse[38] = 'yellow'}}
            onMouseLeave={() => {this.mouse[37] = '#000', this.mouse[370] = 'darkred', this.mouse[38] = 'burlywood'}}
            >
            {message}
          </button>


  </div>
<br /><br />

        <div style={{textAlign: 'center', fontSize: 26, width: '100%', float: 'left'}}>Mobservable Monads</div> <br />

<div style={{marginRight: '25%', marginLeft: '25%', float: 'left' }} >
        I added bind and return functions to mobservable reactive entities. Tests with reactive numbers and strings indicate that the enhanced reactive entities are monads, so that is what I call them. The bind function facilitates the chaining of computations and parsing operations. The general form is monad.bind(function(a1, ...args).bind(function(a2, ...args).bind( ... "a1" is the value of the starting reactive number or string. "a2" is the value of the reactive string or number produced by first operation. "bind" takes the value of the reactive entity, applies the function to it and any other arguments provided, and re-encapsulates it into the same, a different, or a new reactive entity enhanced with the bind and return methods for possible use in processing its value. A demononstration is online at <a style={{color: '#f26d6d'}} href='http://transcendent.ninja'>transcendent ninja</a>. The code is at <a style={{color: '#f26d6d'}} href='https://github.com/dschalk/mobservable-monads'>github.com/dschalk/mobservable-monads</a>
         <br /><br />
  </div>





</div>
    )}
  };

reactMixin(B2.prototype, require('./node_modules/react/lib/AutoFocusMixin'));

React.render(<B2 key='B2' />, document.getElementById('divSix'));
