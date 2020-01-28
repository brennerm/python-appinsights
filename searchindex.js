Search.setIndex({docnames:["applicationinsights","applicationinsights.channel","applicationinsights.channel.contracts","applicationinsights.django","applicationinsights.exceptions","applicationinsights.logging","applicationinsights.requests","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["applicationinsights.rst","applicationinsights.channel.rst","applicationinsights.channel.contracts.rst","applicationinsights.django.rst","applicationinsights.exceptions.rst","applicationinsights.logging.rst","applicationinsights.requests.rst","index.rst"],objects:{"applicationinsights.TelemetryClient":{add_telemetry_processor:[0,1,1,""],channel:[0,1,1,""],context:[0,1,1,""],flush:[0,1,1,""],track_availability:[0,1,1,""],track_dependency:[0,1,1,""],track_event:[0,1,1,""],track_exception:[0,1,1,""],track_metric:[0,1,1,""],track_pageview:[0,1,1,""],track_request:[0,1,1,""],track_trace:[0,1,1,""]},"applicationinsights.channel":{AsynchronousQueue:[1,0,1,""],AsynchronousSender:[1,0,1,""],QueueBase:[1,0,1,""],SenderBase:[1,0,1,""],SynchronousQueue:[1,0,1,""],SynchronousSender:[1,0,1,""],TelemetryChannel:[1,2,0,"-"],TelemetryContext:[1,0,1,""]},"applicationinsights.channel.AsynchronousQueue":{flush:[1,1,1,""],flush_notification:[1,1,1,""],get:[1,1,1,""],max_queue_length:[1,1,1,""],put:[1,1,1,""],sender:[1,1,1,""]},"applicationinsights.channel.AsynchronousSender":{queue:[1,1,1,""],send:[1,1,1,""],send_buffer_size:[1,1,1,""],send_interval:[1,1,1,""],send_time:[1,1,1,""],send_timeout:[1,1,1,""],service_endpoint_uri:[1,1,1,""],start:[1,1,1,""],stop:[1,1,1,""]},"applicationinsights.channel.QueueBase":{flush:[1,1,1,""],get:[1,1,1,""],max_queue_length:[1,1,1,""],put:[1,1,1,""],sender:[1,1,1,""]},"applicationinsights.channel.SenderBase":{queue:[1,1,1,""],send:[1,1,1,""],send_buffer_size:[1,1,1,""],send_timeout:[1,1,1,""],service_endpoint_uri:[1,1,1,""]},"applicationinsights.channel.SynchronousQueue":{flush:[1,1,1,""],get:[1,1,1,""],max_queue_length:[1,1,1,""],put:[1,1,1,""],sender:[1,1,1,""]},"applicationinsights.channel.SynchronousSender":{queue:[1,1,1,""],send:[1,1,1,""],send_buffer_size:[1,1,1,""],send_timeout:[1,1,1,""],service_endpoint_uri:[1,1,1,""]},"applicationinsights.channel.TelemetryChannel":{TelemetryChannel:[1,0,1,""]},"applicationinsights.channel.TelemetryChannel.TelemetryChannel":{context:[1,1,1,""],flush:[1,1,1,""],queue:[1,1,1,""],sender:[1,1,1,""],write:[1,1,1,""]},"applicationinsights.channel.TelemetryContext":{properties:[1,1,1,""]},"applicationinsights.channel.contracts":{Application:[2,0,1,""],Data:[2,0,1,""],DataPoint:[2,0,1,""],DataPointType:[2,0,1,""],Device:[2,0,1,""],Envelope:[2,0,1,""],EventData:[2,0,1,""],ExceptionData:[2,0,1,""],ExceptionDetails:[2,0,1,""],Internal:[2,0,1,""],Location:[2,0,1,""],MessageData:[2,0,1,""],MetricData:[2,0,1,""],Operation:[2,0,1,""],PageViewData:[2,0,1,""],RemoteDependencyData:[2,0,1,""],RequestData:[2,0,1,""],Session:[2,0,1,""],SeverityLevel:[2,0,1,""],StackFrame:[2,0,1,""],User:[2,0,1,""]},"applicationinsights.channel.contracts.Application":{ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Data":{base_data:[2,1,1,""],base_type:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.DataPoint":{count:[2,1,1,""],kind:[2,1,1,""],max:[2,1,1,""],min:[2,1,1,""],name:[2,1,1,""],ns:[2,1,1,""],std_dev:[2,1,1,""],value:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Device":{id:[2,1,1,""],locale:[2,1,1,""],model:[2,1,1,""],oem_name:[2,1,1,""],os_version:[2,1,1,""],type:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Envelope":{data:[2,1,1,""],ikey:[2,1,1,""],name:[2,1,1,""],sample_rate:[2,1,1,""],seq:[2,1,1,""],tags:[2,1,1,""],time:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.EventData":{measurements:[2,1,1,""],name:[2,1,1,""],properties:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.ExceptionData":{exceptions:[2,1,1,""],measurements:[2,1,1,""],problem_id:[2,1,1,""],properties:[2,1,1,""],severity_level:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.ExceptionDetails":{has_full_stack:[2,1,1,""],id:[2,1,1,""],message:[2,1,1,""],outer_id:[2,1,1,""],parsed_stack:[2,1,1,""],stack:[2,1,1,""],type_name:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Internal":{agent_version:[2,1,1,""],node_name:[2,1,1,""],sdk_version:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Location":{ip:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.MessageData":{message:[2,1,1,""],properties:[2,1,1,""],severity_level:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.MetricData":{metrics:[2,1,1,""],properties:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Operation":{correlation_vector:[2,1,1,""],id:[2,1,1,""],name:[2,1,1,""],parent_id:[2,1,1,""],synthetic_source:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.PageViewData":{duration:[2,1,1,""],id:[2,1,1,""],measurements:[2,1,1,""],name:[2,1,1,""],properties:[2,1,1,""],referrer_uri:[2,1,1,""],url:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.RemoteDependencyData":{data:[2,1,1,""],duration:[2,1,1,""],id:[2,1,1,""],measurements:[2,1,1,""],name:[2,1,1,""],properties:[2,1,1,""],result_code:[2,1,1,""],success:[2,1,1,""],target:[2,1,1,""],type:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.RequestData":{duration:[2,1,1,""],id:[2,1,1,""],measurements:[2,1,1,""],name:[2,1,1,""],properties:[2,1,1,""],response_code:[2,1,1,""],source:[2,1,1,""],success:[2,1,1,""],url:[2,1,1,""],ver:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.Session":{id:[2,1,1,""],is_first:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.StackFrame":{assembly:[2,1,1,""],file_name:[2,1,1,""],level:[2,1,1,""],line:[2,1,1,""],method:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.channel.contracts.User":{account_id:[2,1,1,""],auth_user_id:[2,1,1,""],id:[2,1,1,""],write:[2,1,1,""]},"applicationinsights.django":{ApplicationInsightsMiddleware:[3,0,1,""],LoggingHandler:[3,0,1,""],create_client:[3,3,1,""]},"applicationinsights.exceptions":{enable:[4,3,1,""]},"applicationinsights.logging":{LoggingHandler:[5,0,1,""],enable:[5,3,1,""]},"applicationinsights.logging.LoggingHandler":{acquire:[5,1,1,""],addFilter:[5,1,1,""],close:[5,1,1,""],createLock:[5,1,1,""],emit:[5,1,1,""],filter:[5,1,1,""],flush:[5,1,1,""],format:[5,1,1,""],handle:[5,1,1,""],handleError:[5,1,1,""],release:[5,1,1,""],removeFilter:[5,1,1,""],setFormatter:[5,1,1,""],setLevel:[5,1,1,""]},"applicationinsights.requests":{WSGIApplication:[6,0,1,""]},"applicationinsights.requests.WSGIApplication":{flush:[6,1,1,""]},applicationinsights:{TelemetryClient:[0,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"boolean":0,"case":5,"class":7,"default":[0,1,2,3,5,7],"float":[0,2],"function":0,"import":[1,4,5,6,7],"int":[0,1,2,5],"long":[3,7],"new":[0,1,3,7],"return":[0,1,2,3,5,6,7],"true":[0,2,3,5,7],"try":7,"while":[1,4,5],And:3,For:7,The:[0,1,2,3,5,6,7],These:3,__main__:[6,7],__name__:[6,7],_handler:5,about:[0,5],abov:[3,7],access:5,accompani:0,account_id:2,acquir:5,acquisit:5,activ:7,actual:[0,5],add:[0,1,3,5,7],add_telemetry_processor:0,added:[0,5],addfilt:5,addhandl:7,addit:7,address:0,advanc:7,again:1,agent_vers:2,aggreg:0,all:[0,1,3,5,7],allow:[1,5,7],along:0,alreadi:1,also:[1,7],altern:[5,7],ani:[1,5],anywai:3,api:7,app:[6,7],appinsight:[3,7],applic:[0,1,3,4,5,6],application_insight:[1,3,7],applicationinsight:7,applicationinsightshandl:5,applicationinsightsmiddlewar:7,arg:[0,1,3,4,5,6],argument:[3,7],arrai:1,assembl:2,associ:[0,1],assum:7,asu:[1,7],async:5,async_:5,asynchron:[1,3,7],asynchronousqueu:7,asynchronoussend:7,attach:0,auth:[3,7],auth_user_id:2,authenticationmiddlewar:[3,7],automat:[3,4],avail:[0,5,7],availability_id:0,azur:[0,7],back:1,background:[3,7],bar:7,base:1,base_data:2,base_typ:2,basic:7,basicconfig:[5,7],batch:[1,7],baz:7,been:[0,5],befor:[0,1,3,4,7],behavior:7,being:[0,1,4,5],below:[3,7],between:5,blah:7,bool:[0,2,5],boom:[4,7],buffer:1,builtin:7,call:[0,1,4,5],callabl:5,caller:1,can:[1,3,5,7],captur:[0,4,7],cardin:0,care:5,caus:[5,7],chang:5,channel:[0,3,5,7],check:[1,3,7],clickjack:[3,7],client:[0,1,3,7],close:5,code:[0,3,7],collect:[0,4],com:[3,7],command:0,commandnam:0,common:[3,7],common_properti:6,commonmiddlewar:[3,7],concret:1,condition:5,config:6,configur:[3,6,7],conjunct:1,construct:1,consult:5,consum:1,contain:1,content:2,context:[0,1,3,7],contract:[0,1,3,7],contrib:[3,7],correlation_vector:2,could:5,count:[0,2],creat:[0,1,5],createlock:5,critic:0,csrf:[3,7],csrfviewmiddlewar:[3,7],current:[1,2,3,7],custom:[0,3,5,7],data:[0,1,7],data_to_send:1,datapointtyp:0,datetim:0,debug:[0,3,5,7],debug_ikei:3,def:[6,7],defin:7,depend:[0,5],dependency_id:0,deriv:1,determin:[0,5],develop:7,deviat:0,devic:[1,7],dict:[0,1,2],differ:[4,5],disabl:[3,7],disable_existing_logg:[3,7],django:[0,7],djangoproject:7,doc:7,document:[3,7],doe:1,doesn:1,doing:1,don:7,down:[1,7],drain:1,drop:5,durat:[0,2],dure:[3,5,7],each:[3,4,7],either:[0,5],els:5,emiss:5,emit:5,empti:1,enabl:[3,6,7],encount:5,end:[0,3,7],endpoint:[1,3,5,7],enqueu:1,ensur:5,entri:0,envelop:1,error:[0,5,7],etc:7,europ:7,even:3,event:[0,1,3,7],eventdata:1,everi:[1,3,7],exampl:[0,3,7],exc_info:[0,7],except:[0,2,3,5,7],execut:0,exist:[5,6],extend:7,fail:1,fals:[0,3,5,7],few:7,field:0,file:[3,7],file_nam:2,filter:[0,5],finish:[3,7],first:7,flask:7,flush:[0,1,5,6,7],flush_notif:1,fmt:5,follow:[3,7],foo:7,forc:1,form:1,format:[5,7],formatt:[5,7],found:[1,3],framework:5,free:1,from:[1,3,4,5,6,7],fulli:[3,7],gener:0,get:[1,5,7],get_respons:3,getlogg:7,give:1,goe:[1,4,5,6,7],going:1,gracefulli:1,group:0,handl:[3,5,7],handleerror:5,handler:[3,5,7],has:[0,3,7],has_full_stack:2,hash:2,have:[3,5,7],held:1,hello:[6,7],hello_world:7,hello_world_servic:6,here:[1,3,4,5,6,7],hit:7,hook:7,host:[0,6],how:[3,7],howev:5,http:[0,1,3,7],http_method:0,httpserver:6,ignor:5,ikei:[2,3,7],immedi:[0,1],implement:1,incom:7,individu:0,info:[0,5,7],inform:[0,3,5,7],initi:0,input:[3,7],insight:[0,1,3,4,5,6],instanc:[0,1,2,3,4,5,7],instanti:7,instead:[3,5,7],instrument:[1,3,4,5,6,7],instrumentation_kei:[0,1,4,5,6],integr:[5,7],interact:0,interest:5,intern:5,interpret:0,interv:1,irrespect:0,is_first:2,isoformat:0,item:[0,1,3,5,7],its:7,just:5,keep:7,kei:[1,3,4,5,6,7],keyword:5,kind:[2,7],kwarg:[1,3,4,5,6],larger:1,last:0,latest:7,length:1,level:[0,2,3,5,7],levelnam:[5,7],like:0,line:2,list:[1,2],listen:1,local:2,locat:0,lock:5,log:[0,3,7],log_except:3,loggabl:5,logger:[3,5,7],logginghandl:7,logic:0,logrecord:5,look:0,lookup:5,lost:7,low:0,mai:[3,5],main:0,make_wsgi_app:6,manual:[5,7],map:5,max:[0,2],max_queue_item_count:7,max_queue_length:[1,7],maximum:[0,1],mean:1,measur:[0,2,7],messag:[0,2,3,5,7],messagemiddlewar:[3,7],method:[0,1,2,3,5],metric:[0,2,7],middlewar:[3,6,7],middleware_class:[3,7],millisecond:0,min:[0,2],minimum:[0,1],model:[1,2,7],modifi:[3,7],modul:7,more:[3,5,7],most:[1,5],mostli:5,multipl:[4,5],must:[3,5,7],my_logg:7,name:[0,1,2,3,5,7],need:[1,3,7],net:[1,7],newer:3,newli:5,node_nam:2,non:5,none:[0,1,2,3,5,7],northpol:[1,7],note:7,noth:1,notif:1,notifi:1,number:[0,1],object:[0,1,2,3,4,5,7],occur:[0,5],oem_nam:[1,2,7],often:[3,7],onc:[3,7],one:[0,1,4],oper:1,option:[3,7],order:0,os_vers:2,other:[0,1,3,7],otherwis:[0,5],our:7,outer_id:2,over:1,overrid:1,overridden:[1,5],page:0,paramet:0,parent:[3,7],parent_id:2,parsed_stack:2,part:1,pass:[0,1,3,5],past:6,path:[0,3],perform:7,persistence_path:1,pick:[1,7],pip:7,place:[3,7],pleas:7,point:[0,5],poll:7,portal:7,pre:3,preced:1,present:[1,3,5],problem_id:2,procedur:0,process:5,processor:0,project:[3,7],propag:[3,7],properti:[0,1,2,3,7],pull:1,push:[0,1],put:1,pyramid:6,python:5,qualifi:[3,7],queri:0,queu:[5,6],queue:[0,1,3,7],rais:[4,7],raiseexcept:5,reach:1,record:5,record_view_argu:[3,7],recycl:[3,7],referenc:3,referrer_uri:2,rel:3,relat:7,releas:[5,7],remov:5,removefilt:5,replac:5,repres:[1,2,5,6],request:[0,1,3,7],request_id:0,requestdata:[3,7],requir:3,reset:7,resourc:5,respons:[0,1,6],response_cod:[0,2],result:[0,4,5],result_cod:[0,2],resultcod:0,root:5,rout:7,run:7,run_loc:0,same:[0,2,3,7],sampl:7,sample_r:2,santa:[1,7],scan:6,sdk_version:2,second:[1,3,7],section:7,secur:[3,7],securitymiddlewar:[3,7],see:[3,7],send:[0,1,3,4,5,7],send_buffer_s:[1,7],send_interv:[1,3,7],send_interval_in_millisecond:7,send_tim:[1,3,7],send_timeout:1,sender:[0,1,3,7],sent:[0,4,5,6,7],separ:7,seq:2,serial:5,serv:[0,6],server:0,servic:[0,1,3,4,5,6,7],service_endpoint_uri:1,session:[3,7],sessionauthenticationmiddlewar:[3,7],sessionmiddlewar:[3,7],set:[0,1,3,4,5,7],setformatt:[5,7],setlevel:[5,7],sever:0,severity_level:2,should:[0,1,5],show:0,shut:[1,7],shutdown:[5,7],silent:5,simpl:[5,7],simple_logg:7,singl:[0,1],site:0,size:1,sleep:1,some:7,someth:[5,7],sourc:[0,1,2,3,4,5,6],span:1,specifi:[1,3,5,7],sql:0,stack:2,standard:0,start:[0,1],start_tim:0,statement:0,statu:0,std_dev:[0,2],stop:1,store:0,str:[0,1,4,5],string:2,subclass:5,submit:[3,4,7],succeed:7,success:[0,2],suppli:[5,6],support:[3,7],surfac:7,synchron:[1,7],synthetic_sourc:2,sys:[0,7],system:5,tabl:0,tag:2,take:[0,1],target:[0,2],telemetri:[0,1,3,4,5,6,7],telemetry_channel:0,telemetry_processor:0,telemetrychannel:[0,7],telemetrycli:[3,7],telemetrycontext:[0,3,7],templat:0,test:[0,7],than:[1,3,7],thei:[0,5,7],thi:[0,1,2,3,4,5,6,7],thread:[1,3,5,7],thrown:[0,4],tidi:5,time:[0,1,2,7],timer:7,togeth:0,topic:7,trace:[0,1,5,7],traceback:0,track:[3,7],track_avail:[0,7],track_depend:0,track_ev:[0,7],track_except:[0,7],track_metr:[0,7],track_pageview:0,track_request:0,track_trac:[0,1,7],transmit:1,trigger:0,type:[0,1,2,3,7],type_nam:2,uncommon:[3,7],underli:5,unhandl:[4,7],union:5,unless:3,uri:1,url:[0,2,3],use:[1,4,5,7],use_operation_url:7,use_view_nam:3,used:[0,1,5],user:[1,5,7],uses:3,using:[1,3,6],uuid:0,valu:[0,1,2,5],variou:7,ver:[1,2,7],version:[3,5,7],veto:5,via:[1,5,7],view:[0,3,6,7],view_config:6,visual:7,visualstudio:[3,7],wait:[1,3,7],want:[0,5],warn:[0,3,7],web:0,well:1,went:7,were:0,west:7,what:[0,5],whatev:[3,7],when:[1,3,5,7],where:[0,7],whether:5,which:[1,3,5,7],wish:5,work:1,worker:[1,7],world:7,would:3,wrap:[1,5,7],wrapper:6,write:[0,1,2],wsgi:[6,7],wsgi_app:7,wsgi_appl:6,wsgiapplic:7,x31a:[1,7],xframeoptionsmiddlewar:[3,7],you:[1,3,5,7],your:[1,3,4,5,6,7],zero:5},titles:["applicationinsights module","applicationinsights.channel module","applicationinsights.channel.contracts module","applicationinsights.django module","applicationinsights.exceptions module","applicationinsights.logging module","applicationinsights.requests module","Application Insights SDK for Python"],titleterms:{"class":[0,1,2,3,5,6],"function":[3,4,5],applic:[2,7],applicationinsight:[0,1,2,3,4,5,6],applicationinsightsmiddlewar:3,asynchronousqueu:1,asynchronoussend:1,channel:[1,2],contract:2,create_cli:3,data:2,datapoint:2,datapointtyp:2,devic:2,django:3,enabl:[4,5],envelop:2,eventdata:2,except:4,exceptiondata:2,exceptiondetail:2,insight:7,instal:7,intern:2,locat:2,log:5,logginghandl:[3,5],messagedata:2,metricdata:2,modul:[0,1,2,3,4,5,6],oper:2,pageviewdata:2,python:7,queuebas:1,remotedependencydata:2,request:6,requestdata:2,requir:7,sdk:7,senderbas:1,session:2,severitylevel:2,stackfram:2,synchronousqueu:1,synchronoussend:1,telemetrychannel:1,telemetrycli:0,telemetrycontext:1,usag:7,user:2,wsgiapplic:6}})