t fs = require('fs'),
          args = process.argv[2],
                  dir = process.argv[3];
try{
  switch(args){
            case 'list':
                          var files = fs.readdirSync(__dirname),
                                              i = 0;
                                      var array = [];
                                      for(i;i<files.length;i++){
                                                        array[i] = new Object();
                                                                        array[i].fileName = files[i];
                                                                                        array[i].fileSize = fs.statSync('./'+files[i].size);
                                                                                                    
                                      }
                                                  const json = JSON.stringify(array,null,2);
                                                              console.log(json);
                                                                          break;
                                                                                  case 'mkdir':
                                                                          fs.mkdir(dir,function(err){
                                                                            if(err){
                                                                                                  console.error(err.message);
                                                                                                                      process.exit(1);
                                                                                                                                      
                                                                            }
                                                                                        
                                                                          });
                                                                                      break;
                                                                                              default:
                                                                                                  console.error('请输入正确的参数');
                                                                                                              process.exit(1);
                                                                                                                          break;
                                                                                                                              
  }

}catch(err){
      console.error('请输入正确的参数');
          process.exit(1);

}
