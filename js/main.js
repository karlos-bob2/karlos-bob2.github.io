$(function(){$("#my-menu").mmenu({navbar:{title:""},extensions:["border-full","fx-menu-zoom","fx-panels-zoom"],offCanvas:{position:"right",pageSelector:"#wrapper"}});var e=$("#menu-button"),n=$("#my-menu").data("mmenu");e.on("click",function(){n.open()}),n.bind("open:finish",function(){setTimeout(function(){e.addClass("is-active")},100)}),n.bind("close:finish",function(){setTimeout(function(){e.removeClass("is-active")},100)}),$(".owl-carousel").owlCarousel({items:3,margin:10,loop:!1,responsive:{0:{items:1},480:{items:1},600:{items:2},991:{items:2}}})}),$(window).scroll(function(){$(this).scrollTop()>1?$("header").addClass("stickyEnabled"):$("header").removeClass("stickyEnabled")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm1tZW51IiwibmF2YmFyIiwidGl0bGUiLCJleHRlbnNpb25zIiwib2ZmQ2FudmFzIiwicG9zaXRpb24iLCJwYWdlU2VsZWN0b3IiLCIkaGFtYnVyZ2VyIiwiQVBJIiwiZGF0YSIsIm9uIiwib3BlbiIsImJpbmQiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJtYXJnaW4iLCJsb29wIiwicmVzcG9uc2l2ZSIsIjAiLCI0ODAiLCI2MDAiLCI5OTEiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0aGlzIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiQUFRQUEsRUFBRSxXQUNFQSxFQUFFLFlBQVlDLE9BQ1ZDLFFBQ0lDLE1BQU8sSUFFWEMsWUFDSSxjQUNBLGVBQ0Esa0JBT0pDLFdBQ0lDLFNBQVUsUUFDVkMsYUFBZ0IsYUFJdkIsSUFBSUMsR0FBYVIsRUFBRSxnQkFDZlMsRUFBTVQsRUFBRSxZQUFZVSxLQUFNLFFBRTdCRixHQUFXRyxHQUFJLFFBQVMsV0FDckJGLEVBQUlHLFNBR1BILEVBQUlJLEtBQU0sY0FBZSxXQUN0QkMsV0FBVyxXQUNWTixFQUFXTyxTQUFVLGNBQ3RCLE9BRUhOLEVBQUlJLEtBQU0sZUFBZ0IsV0FDdkJDLFdBQVcsV0FDVk4sRUFBV1EsWUFBYSxjQUN6QixPQU9MaEIsRUFBRSxpQkFBaUJpQixhQUNmQyxNQUFNLEVBQ05DLE9BQU8sR0FDUEMsTUFBSyxFQUNMQyxZQUNJQyxHQUNJSixNQUFNLEdBRVZLLEtBQ0lMLE1BQU0sR0FFVk0sS0FDSU4sTUFBTSxHQUVWTyxLQUNJUCxNQUFNLFFBTXRCbEIsRUFBRTBCLFFBQVFDLE9BQU8sV0FDYjNCLEVBQUU0QixNQUFNQyxZQUFjLEVBQ3RCN0IsRUFBRSxVQUFVZSxTQUFTLGlCQUdyQmYsRUFBRSxVQUFVZ0IsWUFBWSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqXG4vLyDQndCQ0KHQotCg0J7QmdCa0JggTW1lbnUo0JzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOKSxcbi8vINCSINC00LDQvdC90L7QuSDRgNC10LDQu9C40LfQsNGG0LjQuCDQvdCwINGB0LDQudGC0LUg0LTQstC1INC90LXQt9Cw0LLQuNGB0LjQvNGL0YUg0LLQtdGA0YHQuNC4INC80LXQvdGOLFxuLy8g0YfRgtC+INC90LUg0L7Rh9C10L3RjCDQv9GA0LDQstC40LvRjNC90L4sINGCLtC6INC10YHQu9C4INGH0YLQviDQu9C40LHQviDQsiDQuNC30LzQtdC90Y/RgtGMINCyINC+0LTQvdC+0Lwg0LzQtdC90Y4g0YLQviDRjdGC0L4g0L3Rg9C20L3QviDQtNC+0LHQu9C40YDQvtCy0LDRgtGMINC4INCyINC00YDRg9Cz0L7QvCFcbi8vINCd0LAg0YHQsNC50YLQtSDRjdGC0L7Qs9C+INC/0LvQsNCz0LjQvdCwINC10YHRgtGMINGA0LXRiNC10L3QuNC1LCDQvdC+INC80L3QtSDQstC70L7QvCDQtdCz0L4g0YDQtdCw0LvQuNC30L7QstGL0LLQsNGC0YwsXG4vLyDQstC+0LfQvNC+0LbQvdC+INC40LzQtdC90L3QviDQotCrINGB0LzQvtC20LXRiNGMINGN0YLQviDRgdC00LXQu9Cw0YLRjCDQuCDRgdGC0LDRgtGMINGH0LXRgNC90YvQvCDQstC70LDRgdGC0LXQu9C40L3QvtC8XG4vLyAqKipcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnI215LW1lbnUnKS5tbWVudSh7XG4gICAgICAgIG5hdmJhcjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25zXCI6IFtcbiAgICAgICAgICAgIFwiYm9yZGVyLWZ1bGxcIixcbiAgICAgICAgICAgIFwiZngtbWVudS16b29tXCIsXG4gICAgICAgICAgICBcImZ4LXBhbmVscy16b29tXCJcbiAgICAgICAgICAgIC8vIFwiZngtcGFuZWxzLXNsaWRlLTBcIixcbiAgICAgICAgICAgIC8vIFwidGhlbWUtZGFya1wiLFxuICAgICAgICAgICAgLy8gXCJmeC1tZW51LWZhZGVcIixcbiAgICAgICAgICAgIC8vIFwiZngtcGFuZWxzLXpvb21cIixcbiAgICAgICAgICAgIC8vIFwiZngtbGlzdGl0ZW1zLXNsaWRlXCJcbiAgICAgICAgXSxcbiAgICAgICAgb2ZmQ2FudmFzOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgXCJwYWdlU2VsZWN0b3JcIjogXCIjd3JhcHBlclwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICB2YXIgJGhhbWJ1cmdlciA9ICQoXCIjbWVudS1idXR0b25cIik7XG4gICAgIHZhciBBUEkgPSAkKFwiI215LW1lbnVcIikuZGF0YSggXCJtbWVudVwiICk7XG4gICAgICBcbiAgICAgICRoYW1idXJnZXIub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICBBUEkub3BlbigpO1xuICAgICAgfSk7XG5cbiAgICAgIEFQSS5iaW5kKCBcIm9wZW46ZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkaGFtYnVyZ2VyLmFkZENsYXNzKCBcImlzLWFjdGl2ZVwiICk7XG4gICAgICB9LCAxMDApO1xuICAgICB9KTtcbiAgICAgIEFQSS5iaW5kKCBcImNsb3NlOmZpbmlzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGhhbWJ1cmdlci5yZW1vdmVDbGFzcyggXCJpcy1hY3RpdmVcIiApO1xuICAgICAgfSwgMTAwKTtcbiAgICAgfSk7XG5cbi8vICoqKlxuLy8g0J3QkNCh0KLQoNCe0JnQmtCYINCh0JvQkNCZ0JTQldCg0JBcbi8vICoqKlxuXG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6MyxcbiAgICAgICAgbWFyZ2luOjEwLFxuICAgICAgICBsb29wOmZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwIDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0ODAgOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMCA6IHtcbiAgICAgICAgICAgICAgICBpdGVtczoyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTkxIDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5pZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEpeyAgXG4gICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MoXCJzdGlja3lFbmFibGVkXCIpO1xuICB9XG4gIGVsc2V7XG4gICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzdGlja3lFbmFibGVkXCIpO1xuICB9XG59KTsiXX0=
