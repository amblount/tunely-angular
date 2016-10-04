/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('tunely', []);
  .controller('AlbumsIndexController', AlbumsIndexController);

function AlbumsIndexController () {
  var vm = this;

  vm.newAlbum = {
    name: 'Waterfalls',
    artistName: 'TLC'
  };
}
