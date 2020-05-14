<template>
	<v-app>
		<!-- <v-navigation-drawer v-model="sidebar" app clipped>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
						<v-list-item-title>
							{{ item.title }}
						</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
		<v-app-bar app elevate-on-scroll color="primary">
				<!-- <v-app-bar-nav-icon @click="sidebar = !sidebar">
				</v-app-bar-nav-icon> -->
					<v-toolbar-title id="title">
						<router-link to="/" tag="span" style="cursor: pointer">
							{{ appTitle }}
						</router-link>
					</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-toolbar-items class="hidden-xs-only">
						<v-btn
							text
							v-for="item in menuItems"
							:key="item.title"
							:to="item.path">
							<v-icon left dark>{{ item.icon }}</v-icon>
							{{ item.title }}
						</v-btn>
					</v-toolbar-items>
			</v-app-bar>
			<!-- <div class="center"> -->
				<v-content>
					<!-- <v-container class="fill-height" fluid> -->
						<router-view></router-view>
					<!-- </v-container> -->
				</v-content>

			<!-- </div> -->
			<!-- <v-footer app>
				Footer
			</v-footer> -->
	</v-app>
</template>

<script>


export default {
  name:"App",
  data() {
    return {
        appTitle: "Beacon",
        sidebar: false,
        menuItems: [
          {title: 'About', path:"/About", icon: "mdi-information"},
					{title: 'Expert Analysis', path:"/Charts", icon: "mdi-chart-line"},
					{title: 'State Tracker', path:"/States", icon:"mdi-google-maps"}
        ],
        color: "#F0F4EF"

        
      }
	}
  
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,800;0,900;1,500&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
	@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,800;0,900;1,500&display=swap");
	.changeColor {
		background-color: #FFFFFF;
	}
	#title {
		font-family: "Fjalla One", sans-serif;
		/* font-family: "Playfair Display", serif; */
		font-weight: 700;
		font-size: 25pt;
		letter-spacing: 1.5pt;
	}
	.contain-app-bar {
		max-width: 100%
	}
	/* .center {
		display: flex;
		justify-content: center;
		align-content: center;
	} */
	/* .add-padding {
		padding-left: 10%;
	} */
/* @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i&display=swap'); */
/* html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers 
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

html, body {
  font-family: 'Playfair Display', serif;
  margin: 0;
  min-height: 100%;
  /* font-family: 'Cormorant', serif; 
}

body {
    position: relative; /* needed for the overlay to extend when you scroll 
    /* general styles 
    padding: 30px;
    font-family: 'Open Sans', sans-serif;
    color: #fff;

}
.tool-helper{
	top: -64px;
} */


</style>