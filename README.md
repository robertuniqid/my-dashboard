my-dashboard
============

My Dashboard is a Dashboard system
You can preview it here : http://easy-development.com/my-dashboard

This is really easy to use

You just need a json object, you can find one in the repository.
And a trigger or triggers + declare a namespace. You can easily clone this object to have any number of dashboards.

```javascript
LayoutHelperDashboard.Init({
  trigger   : $('#show-dashboard'),
  namespace : 'dashboard-component',
  elements_groups : response.dashboard_elements
});
```
