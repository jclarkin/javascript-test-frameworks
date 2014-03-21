var data = [
  {
    'name': 'Record Work',
    'url': '#',
    'category': 'Car Mechanic',
    'icon': 'edit'
    },
  {
    'name': 'Find Tools',
    'url': '#',
    'category': 'Car Mechanic',
    'type': 'search',
    'icon': 'briefcase'
    },
  {
    'name': 'Find Gears',
    'url': '#',
    'category': 'Car Mechanic',
    'type': 'search',
    'icon': 'gears'
    },
  {
    'name': 'Research Manuals',
    'url': '#',
    'category': 'Car Mechanic',
    'icon': 'book'
    },
  {
    'name': 'Preferences',
    'url': '#',
    'category': 'General',
    'icon': 'thumbs-up'
    },
  {
    'name': 'Logout',
    'url': '#',
    'category': 'General',
    'icon': 'power-off'
    }
 ];


var initialize = function () {

  // TODO Handle gracefully case of no data returned
  // TODO Handle gracefully user expectation while awaiting data to load

  // Add them to the screen
  var index = 0;
  var interval = setInterval(function () {
    var interface = data[index];
    var $menuItem = buildMenuItem(interface);
    var $menuSet = $('#' + getMenuSetId(interface));
    $menuSet.append($menuItem.hide().fadeIn(1000));

    index++;
    if (index >= data.length) clearInterval(interval);
  }, 200);
};

function getMenuSetId(interface) {
  return 'id' + interface.category.replace(" ", "_");
}

function buildMenuItem(interface) {
  var menuSetId = getMenuSetId(interface);
  var $menuSet = $('#' + menuSetId);

  // If it does not yet exist on the page, create it
  if ($menuSet.length === 0) {
    $menuSet = $('<div class="menu-set" id="' + menuSetId + '"></div>');
    $('#idMenuContainer').append($menuSet);
  }

  // Add the Menu Item to the Set
  var $html = $('<a class="menu-item" href="' + interface.url + '"></a>');
  $html.append('<div class="label">' + interface.name + '  </div>');
  var $icon = $('<div class="icon"><span class="fa fa-' + interface.icon + ' icon-main"></span></div>');
  $html.append($icon);
  if (interface.type && interface.type === 'search') $icon.append('<span class="fa fa-search-plus icon-super"></span>');

  return $html;
}

initialize();