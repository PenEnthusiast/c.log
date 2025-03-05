// Name: c.log
// ID: clog
// Description: Powerful interaction with the web console
// By: Penthusiast <https://scratch.mit.edu/users/Penthusiast/>
// License: MPL-2.0

(function(Scratch) {
  'use strict';

const icon = "data:image/png;base64,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"
class cLog {
    getInfo() {
      return {
        id: 'clog',
        name: 'c.Log',
        color1: '#4f6e6c',
        blocks: [
          {
            opcode: 'consoleS',
            blockType: Scratch.BlockType.COMMAND,
            text: '[FORM] [TXT] size [SIZE] text color [MCOL] background color [BCOL]',
            blockIconURI: icon,
            arguments: {
              FORM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'CONSOLEMSGTYPE'
              },
              TXT: {
                type: Scratch.ArgumentType.STRING
              },
              SIZE: {
                type: Scratch.ArgumentType.NUMBER
              },
              MCOL: {
                type: Scratch.ArgumentType.COLOR
              },
              BCOL: {
                type: Scratch.ArgumentType.COLOR
              }
            }
          },
          {
            opcode: 'consoleA',
            blockType: Scratch.BlockType.COMMAND,
            text: '[FORM] [TXT] styling [STYL]',
            blockIconURI: icon,
            arguments: {
              FORM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'CONSOLEMSGTYPE'
              },
              TXT: {
                type: Scratch.ArgumentType.STRING
              },
              STYL: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'consoleTimerStart',
            blockType: Scratch.BlockType.COMMAND,
            text: 'start timer [NAME]',
            blockIconURI: icon,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'consoleTimerLog',
            blockType: Scratch.BlockType.COMMAND,
            text: 'log time of timer [NAME]',
            blockIconURI: icon,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'consoleTimerEnd',
            blockType: Scratch.BlockType.COMMAND,
            text: 'end timer [NAME]',
            blockIconURI: icon,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
              }
            }
          },
          {
            opcode: 'consoleClear',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear',
            blockIconURI: icon,
          },
        ],
        menus: {
          CONSOLEMSGTYPE: {
            acceptReporters: true,
            items: ['log', 'warn', 'error']
          }
        }
      };
    }
  
    consoleS(args) {
      try {
        switch(args.FORM) {
          case 'log':
            console.log('%c' + args.TXT,'color: ' + args.MCOL + "; background-color: " + args.BCOL + '; font-size: ' + args.SIZE + "px;");
            break;
  
          case 'warn':
            console.warn('%c' + args.TXT,'color: ' + args.MCOL + "; background-color: " + args.BCOL + '; font-size: ' + args.SIZE + "px;");
            break;
          
          case 'error':
            console.error('%c' + args.TXT,'color: ' + args.MCOL + "; background-color: " + args.BCOL + '; font-size: ' + args.SIZE + "px;");
            break;
          default:
        }
      } catch (error) {}
    }
    consoleA(args) {
      try {
        switch(args.FORM) {
          case 'log':
            console.log('%c' + args.TXT, args.STYL);
            break;
  
          case 'warn':
            console.warn('%c' + args.TXT, args.STYL);
            break;
          
          case 'error':
            console.error('%c' + args.TXT, args.STYL);
            break;
          default:
        }      
      } catch (error) {}
    }
    consoleTimerStart(args) {
      try {
        console.time(args.NAME);
      } catch (error) {}
    }
    consoleTimerLog(args) {
      try {
        console.timeLog(args.NAME);
      } catch (error) {}
      
    }
    consoleTimerEnd(args) {
      try {
        console.timeEnd(args.NAME);
      } catch (error) {}
    }
    consoleClear() {
      try {
        console.clear();
      } catch (error) {}
    }
  }
  Scratch.extensions.register(new cLog());
})(Scratch);

