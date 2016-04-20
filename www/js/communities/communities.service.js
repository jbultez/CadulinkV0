angular.module('communities.service', ['articles.data', 'communities.data', 'people.data'])

.factory('CommunityService', function() {
    return {
        get: function(communityId) {
            return communities[communityId];
        },
        getCommunities(communityId){
            subCommunities = [];
            communities[communityId].relatedCommunities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        },
        getImage: function(id){
          return people[id].image;
        },
        getAnimator: function(id){
          return people[id];
        },
        getAdmin: function(id){
          return people[id];
        },
        getLabelisateur: function(id){
          return people[id];
        },
        getNbrMember: function(communityId){
          var nbrMembre = 0;
          for(var i = 0; i < people.length; i++){
            var communitiesPeople = people[i].communities;
              for(var u = 0; u < communitiesPeople.length; u++){
                if(communitiesPeople[u] == communityId){
                  nbrMembre++;
                }
              }
          }
        return nbrMembre;
         },
         getMember: function(communityId)
         {
          var members = [];
          for(var i = 0; i < people.length; i++){
            var communitiesPeople = people[i].communities;
              for(var u = 0; u < communitiesPeople.length; u++){
                if(communitiesPeople[u] == communityId){
                  members.push(people[i]);
                  console.log(members)
               }
           }
         }
         return members;
         },
        edit(communityId,label,description,communityManagerId) {
            communities[communityId].id = id;
            communities[communityId].label = label;
            communities[communityId].description = description;
            communities[communityId].communityId = communityId;
            return true;
        },
        removeMember: function(id,communityId) {
          var removeMember = people[id].communities;
          for(var i = 0; i < removeMember.length; i++) {
            if(removeMember[i] == communityId){
              removeMember.splice(i, 1);
              console.log("voila");
              console.log(removeMember)
            }
          }
          people[id].communities = removeMember;
          console.log(people[id].communities)
          }
        };
});
