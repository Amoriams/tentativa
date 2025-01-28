"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[77596],{98891:(e,r,t)=>{t.d(r,{Z:()=>o});function o(e,r,t,s=0){if(-1===r||-1===t||r===t)return e;let i=t+s,d=r+s;if(i<0||i>=e.length||d<0||d>=e.length)return e;let a=[...e],n=a[d],c=d<i?1:-1;for(let r=d;r!==i;r+=c)a[r]=e[r+c];return a[i]=n,a}},711820:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(868808),s=t(503237);function i(e){if(!e)return"";let{directory:r,queryKey:t}=(0,s.Z)((0,o.Gw)(e,["request_params"]));return r+"?"+Object.keys(t).sort().map(e=>`${e}=${t[e]}`).join("&")}},277844:(e,r,t)=>{t.d(r,{Ht:()=>d,Tb:()=>i});var o=t(711820),s=t(545230);function i({appliedProductFilters:e,appliedUnifiedFilters:r,autoCorrectionDisabled:t,filters:o,journeyDepth:s,query:i,rs:d,scope:a,selectedOneBarModules:n,selectedPinImgSig:c,sourceId:u,sourceModuleId:l,topPinIds:p,user:_}){let y=[e,o,s,i,d,a,n,c,u,l,r,p,_].map(e=>e??"").join(":");return t?"auto-correction-disabled:"+y:y}function d(e){let{appliedProductFilters:r,appliedUnifiedFilters:t,autoCorrectionDisabled:i,bubbleId:d,domains:a,dynamicPageSizeExpGroup:n,filters:c,guidedSearchQuery:u,journeyDepth:l,pageSize:p,priceMax:_,priceMin:y,query:R,requestParams:E,rs:m,scope:f,selectedOneBarModules:I,selectedPinImgSig:D,seoDrawerEnabled:A,sourceId:T,sourceModuleId:g,sourceUrl:$,topPinId:S,topPinIds:b,user:O}=e;return{name:"BaseSearchResource",options:function({appliedUnifiedFilters:e=null,appliedProductFilters:r=null,autoCorrectionDisabled:t=!1,bubbleId:i=null,domains:d=null,dynamicPageSizeExpGroup:a=null,filters:n=null,journeyDepth:c=null,pageSize:u=null,priceMax:l=null,priceMin:p=null,query:_=null,requestParams:y=null,rs:R=s.i.DIRECT_NAVIGATION,scope:E="pins",selectedOneBarModules:m=null,selectedPinImgSig:f=null,seoDrawerEnabled:I=!1,sourceId:D=null,sourceModuleId:A=null,sourceUrl:T=null,topPinId:g=null,topPinIds:$=null,user:S}){return{applied_unified_filters:e,appliedProductFilters:r,article:i,auto_correction_disabled:t,corpus:f?"personalize":null,customized_rerank_type:f?"manas_graph_sage_only_wand_rewrite":null,domains:d,dynamicPageSizeExpGroup:a,filters:n,journey_depth:c,page_size:u,price_max:l,price_min:p,query_pin_sigs:f,query:_,redux_normalize_feed:!0,request_params:y,rs:R,scope:E,selected_one_bar_modules:m,seoDrawerEnabled:I,source_id:D,source_module_id:A,source_url:(0,o.Z)(T),top_pin_id:g,top_pin_ids:$,user:S}}({appliedProductFilters:r,appliedUnifiedFilters:t,autoCorrectionDisabled:!!i,bubbleId:d,domains:a,dynamicPageSizeExpGroup:n,filters:c,guidedSearchQuery:u,journeyDepth:l,pageSize:p,priceMax:_,priceMin:y,query:R,requestParams:E,rs:m,scope:f,selectedOneBarModules:I,selectedPinImgSig:D,seoDrawerEnabled:A,sourceId:T,sourceModuleId:g,sourceUrl:$,topPinId:S,topPinIds:b,user:O})}}},677596:(e,r,t)=>{t.d(r,{J:()=>m,Z:()=>g});var o=t(98891),s=t(29010),i=t(277844),d=t(35486),a=t(517989),n=t(524753),c=t(403764),u=t(362527);let l=new Set(["PinResource","RepinResource"]),p={ApiResource:e=>e?.url==="/v3/orientation/nux_creator_recommendations/"?"nux-creator-recommendations":e?.url==="/v3/users/me/interests/"?`recommended-interests:${e.data?.blend_type}`:e?.url===`/v3/usecases/${e.data?.use_case_id}/feed/`?"useCaseFeed":"",AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`${c.Z.AGGREGATED_COMMENT_REPLIES}:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:()=>"archived-boards",BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:()=>"conversations",DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:()=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{let r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},BaseSearchResource:e=>{let{appliedProductFilters:r,article:t,auto_correction_disabled:o,filters:s,journey_depth:i,query:d,scope:a,selected_one_bar_modules:n,source_id:c,source_module_id:l,top_pin_ids:p}=e;return`search:${(0,u.Z)({appliedFilters:r,article:t,autoCorrectionDisabled:o,filters:s,journeyDepth:i,query:d,scope:a,selectedOneBarModules:n,sourceId:c,sourceModuleId:l,topPinIds:p})}`},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:e=>`user-recent-activity:${e.filter_type}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:()=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},_={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:r}})=>({type:e?c.Z.AGGREGATED_COMMENT_REPLIES:c.Z.AGGREGATED_COMMENTS,id:r,reversed:!0}),ApiResource:({options:{url:e,data:r}})=>e===`/v3/usecases/${r?.use_case_id}/feed/`?{type:c.Z.USE_CASE_TAB,id:r.use_case_id}:null,BoardFeedResource:({options:{board_id:e}})=>({type:c.Z.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:c.Z.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:c.Z.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:c.Z.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:r}})=>({type:c.Z.PROFILE_BOARDS,id:(0,d.Z)(e,r)}),BaseSearchResource:({options:{appliedProductFilters:e,appliedUnifiedFilters:r,auto_correction_disabled:t,filters:o,journey_depth:s,query_pin_sigs:d,query:a,rs:n,scope:u,selected_one_bar_modules:l,source_id:p,source_module_id:_,top_pin_ids:y,user:R},response:E})=>({type:c.Z.SEARCH_PINS,id:(0,i.Tb)({appliedProductFilters:e,appliedUnifiedFilters:r,autoCorrectionDisabled:t,filters:o,journeyDepth:s,query:a,rs:n,scope:u,selectedOneBarModules:l,selectedPinImgSig:d,sourceId:p,sourceModuleId:_,topPinIds:y,user:R}),items:E.resource_response.data?.results||[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:c.Z.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:c.Z.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:c.Z.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:r}})=>({type:c.Z.UNIFIED_COMMENTS,id:e,reversed:r}),UserActivityPinsResource:({options:{user_id:e}})=>({type:c.Z.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:r}})=>({type:c.Z.STORY_PINS_FEED,id:r,items:e.resource_response.data||[]})},y=(e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:e[t].filter(e=>!("pin"===e.type&&e.id===r))}:e,R=(e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:[{type:"pin",id:r},...e[t]]}:e,E=(e,{pinId:r,oldFeedId:t,newFeedId:o})=>t===o?e:R(y(e,{pinId:r,feedId:t}),{pinId:r,feedId:o}),m=(e,r)=>e in p?p[e](r):null,f=(e,r)=>{switch(e.type){case"story":return{id:e.id??"",type:"story",story_type:e.story_type??""};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return r===c.Z.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"boardsection",id:e.id};case"triedit":return{type:"triedit",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"triedit",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:let t="useCaseFeed"===r&&"tracking_params"in e;return{type:"pin",id:e.id??"",...t&&{trackingParams:e.tracking_params}}}},I=(e,r)=>r?`board-section-pins:${r}`:`boardfeed:${e}`,D=(e,r,t)=>{let o=t||a.Z[e];if(o===n.LR)return r.result;if(o===n.sN)return r.result.map(e=>({id:e,schema:"board"}));if(o===n.Gn)return r.result.map(e=>({id:e,schema:"user"}));if(o===n.Ht)return r.result.map(e=>({id:e,schema:"invite"}));if(o===n.fE)return r.result.map(e=>({id:e,schema:"reaction"}));if("object"==typeof o){let e=Object.entries(o).find(([,e])=>e===n.LR);if(e)return r.result[e[0]]}return null},A=(e,r)=>e.map(e=>{let{id:t,schema:o,type:s}=e;return"home_feed_tabs"===s?e:o?{id:t,type:o,trackingParams:"pin"===o?r.pins[t].tracking_params:void 0,user_id:void 0}:null}).filter(Boolean),T=(e,r,t)=>Object.keys(e).reduce((o,s)=>{let i=e[s]||[],d=i.filter(e=>!(e.type===r&&e.id===t));return i.length!==d.length&&(o[s]=d),o},{...e}),g=(e={},r)=>{switch(r.type){case s.zP:case s.aW:{let{payload:t}=r,{resource:o,options:i,normalizedResponse:d,schema:a}=t;if(d&&o in p){let t=D(o,d,a);if(t&&Array.isArray(t)){let a=p[o](i);if("BoardToolsFeedResource"===o||"SectionToolsFeedResource"===o)return{...e,[a]:t};if("UnifiedCommentsResource"===o){let o=A(t,d.entities);if(e[a]&&(s.zP||s.aW===r.type))return{...e,[a]:[...e[a],...o]};return{...e,[a]:o}}{let o=[...r.type===s.aW&&e[a]||[],...A(t,d.entities)];return{...e,[a]:o}}}}else{let{data:o}=t.response.resource_response;if(!t.options?.redux_normalize_feed)return e;let i=_[t.resource]({options:t.options,response:t.response});if(i){let{type:t,id:d,items:a,reversed:n}=i,c=(a||o||[]).map(e=>f(e,t));n&&(c=c.reverse());let u=`${t}:${d}`,l=e[u];if(l||r.type!==s.aW){let t=l||[],o=c;return r.type===s.aW&&(o=n?c.concat(t):t.concat(c)),{...e,[u]:o}}}}break}case"FEED_ITEM_REORDERED":{let{payload:{feedType:t,feedId:s,itemType:i,targetItemId:d,sourceItemId:a}}=r,n=`${t}:${s}`,u=e[n]||[],l=-1,p=-1;if([c.Z.BOARDFEED,c.Z.BOARD_SECTION_PINS,c.Z.BOARD_SECTIONS,"profileBoards"].includes(t)&&(l=u.findIndex(e=>e.type===i&&e.id===a),p=u.findIndex(e=>e.type===i&&e.id===d)),-1!==l&&-1!==p)return{...e,[n]:(0,o.Z)(u,l,p)};break}case"FEED_ITEMS_REMOVED":{let{payload:{feedType:t,feedId:o,inverseSelection:s,itemType:i,itemIds:d=[]}}=r,a=`${t}:${o}`,n=e[a]||[];if(n&&n.length>0&&(t===c.Z.BOARD_SECTION_PINS||t===c.Z.BOARDFEED)){let r=n.filter(e=>{let r=d.includes(e.id);return!(e.type===i&&(s&&!r||!s&&r))}),t=!!r.find(e=>"pin"===e.type);return{...e,[a]:t?r:[]}}if(n&&n.length>0&&t===c.Z.BOARD_SECTIONS||n&&n.length>0&&(t===c.Z.AGGREGATED_COMMENTS||t===c.Z.BOARDLESS_PINS||t===c.Z.PROFILE_PINS_FEED||t===c.Z.STORY_PINS_FEED||t===c.Z.UNIFIED_COMMENTS||t===c.Z.TRIED_IT_FEED||t===c.Z.STORY_PIN_DATA)){let r=n.filter(e=>{let r=d.includes(e.id);return!(e.type===i&&r)});return{...e,[a]:r}}break}case"FEED_ITEMS_ADDED":{let{payload:{feedType:t,feedId:o,itemType:s,itemIds:i=[],prepend:d}}=r,a=`${t}:${o}`,n=e[a]||[];if(n&&(t===c.Z.BOARD_SECTION_PINS||t===c.Z.BOARDFEED||t===c.Z.BOARDLESS_PINS)){let r=i.map(e=>({id:e,type:s})),t=0;"story"===(n[0]||{}).type&&(t=1),"story"===(n[1]||{}).type&&(t=2);let o=[...n.slice(0,t),...r,...n.slice(t)];return{...e,[a]:o}}if(n&&t===c.Z.BOARD_SECTIONS){let r=[...i].reverse().map(e=>({id:e,type:"boardsection"})),t=n?[...r,...n]:[...r];return{...e,[a]:t}}if(t===c.Z.AGGREGATED_COMMENTS||t===c.Z.AGGREGATED_COMMENT_REPLIES||t===c.Z.PROFILE_PINS_FEED||t===c.Z.STORY_PINS_FEED||t===c.Z.UNIFIED_COMMENTS){let r=i.map(e=>({id:e,type:s})),t=n?[...d?r:n,...d?n:r]:r;return{...e,[a]:t}}if(t===c.Z.TRIED_IT_FEED){let r=i.map(e=>({id:e,type:s})),t=n?[...r,...n]:r;return{...e,[a]:t}}break}case"FEED_INVALIDATE":{let{payload:{feedType:t,feedId:o}}=r,s=`${t}:${o}`;return e[s],{...e,[s]:null}}case"APPEND_FEED_ITEMS":{let{payload:{id:t,items:o,options:s}}=r,i=e[t];if(!i)return{...e,[t]:o};{let r;return r=s.isPrepend?i[0]&&"story"===i[0].type?[].concat(i[0],o,i.slice(1)):o.concat(i):i.concat(o),{...e,[t]:r}}}case"PIN_DELETE":{let{payload:{pinId:t}}=r;return T(e,"pin",t)}case"BOARD_ARCHIVE":{let{payload:{boardId:t,username:o}}=r,s=`profile-boards:${o??""}`;if(e[s])return{...e,[s]:e[s].filter(e=>e.id!==t)};break}case"BOARD_UNARCHIVE":{let{payload:{boardId:t}}=r,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter(e=>e.id!==t)};break}case"BOARD_DELETE":{let{payload:{boardId:t}}=r;return T(e,"board",t)}case"BOARD_SECTION_DELETE":{let{payload:{boardSectionId:t}}=r;return T(e,"boardsection",t)}case"PINS_MOVE":{let{payload:{source:t,target:o,pinIds:s,userId:i}}=r,d=t.boardlessPins&&i&&`boardless-pins:${i}`||t.boardId&&I(t.boardId,t.sectionId),a=I(o.boardId,o.sectionId);return s.reduce((e,r)=>E(e,{pinId:r,oldFeedId:d,newFeedId:a}),e)}case"PINS_MOVE_ALL":{let{payload:{source:t,target:o,excludePinIds:s}}=r,i=I(t.boardId,t.sectionId),d=I(o.boardId,o.sectionId),a={...e,[i]:s.map(e=>({type:"pin",id:e}))};return delete a[d],a}case"PIN_EDIT":{let{payload:{pinId:t,boardId:o,sectionId:s="",source:{boardId:i,sectionId:d}}}=r;return E(e,{pinId:t,oldFeedId:I(i,d),newFeedId:I(o,s)})}case s.AF:if(l.has(r.payload.resource)){let t;let o=r.payload.response.resource_response.data,{board:s}=o;if("quick_saves"===s.layout)t=`boardless-pins:${r.payload.options.user_id}`;else{let e=r.payload.options.section;t=e?`board-section-pins:${e}`:`boardfeed:${s.id}`}if(e[t]){let r={...e},s={id:o.id,type:"pin",trackingParams:o?.tracking_params};return r[t]=[s].concat(e[t]),r}}if("BoardSectionResource"===r.payload.resource&&r.payload.normalizedResponse){let t=r.payload.normalizedResponse.result,o=r.payload.normalizedResponse.entities.boardsections[t].board,s=`board-sections:${o}`;if(e[s]){let r={...e};return r[s]=[{id:t,type:"boardsection"}].concat(e[s]),r}}if("AggregatedCommentResource"===r.payload.resource&&r.payload.normalizedResponse){let t={id:r.payload.normalizedResponse.result,type:"aggregatedcomment"},o={...e};for(let s of["aggregated-comments","unified-comments"]){let i=`${s}:${r.payload.options.objectId}`;e[i]&&(o={...o,[i]:[t].concat(o[i])})}return o}if("AggregatedCommentReplyResource"===r.payload.resource&&r.payload.normalizedResponse){let t=`${c.Z.AGGREGATED_COMMENT_REPLIES}:${r.payload.options.objectId}`;return{...e,[t]:[...e[t]||[],{id:r.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===r.payload.resource&&r.payload.normalizedResponse){let{reaction_pin_id:t,reaction_type:o}=r.payload.options;if("reaction"===r.payload.options.action_type){let s=`reactions:${r.payload.options.pin_id}`,i={...e},d={id:`${t}:${r.payload.options.user_id}:${o}`,type:"reaction",trackingParams:void 0};return i[s]=[d].concat(e[s]),i}if("unreaction"===r.payload.options.action_type)return T(e,"reaction",`${t}:${r.payload.options.user_id}`)}break;case"COMPLETE_STORY":{let{payload:{storyId:t}}=r;return T(e,"story",t)}}return e}},362527:(e,r,t)=>{t.d(r,{Z:()=>o});function o({appliedFilters:e,article:r,autoCorrectionDisabled:t,filters:o,journeyDepth:s,query:i,scope:d,selectedOneBarModules:a,sourceId:n,sourceModuleId:c,topPinIds:u}){let l=[d,i,o,e,r,n,c,s,u].map(e=>e??"").join(":");return t&&(l+=":auto-correction-disabled"),a&&(l+=`:${a}`),l}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/77596-5fa4adb651117542.mjs.map