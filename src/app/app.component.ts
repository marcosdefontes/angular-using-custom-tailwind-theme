import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { theme } from 'ds-govbr-tailwind/theme'

// interface Color {
//   id: string;
//   colors?: any[]
//   hex?: string;
// }

interface ColorFamily {
  name: string;
  variations: { token: string; color: string }[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  colors: ColorFamily[] | any[] = []
  ngOnInit(): void {
    console.log(theme.extend.colors)
    this.colors = Object.entries(theme.extend.colors).map(
      e => {
        return {
          name: e[0],
          variations:
            typeof e[1] === "string" ?
              [{ token: e[0], color: e[1] }]
              : (typeof e[1] === 'object' && e[1] ? Object.entries(e[1]).map(t => { return { token: `${e[0]}-${t[0]}`, color: t[1] } })
                // Object.entries(e[1] as { token: string; color: string }[]).map(v => {
                //   console.log(v, e[1], Object.entries(e[1] as { token: string; color: string }[]))
                //   // console.log(v)
                //   // return { token: v[0], color: v[1] } as { token: string; color: string }
                //   return { token: 't', color: 'c' }
                // })
                : [])
        }
      })
    console.log(this.colors)
    // typeof e[1] == 'object' ?
    //       Object.entries(e[1]).map(c => { return { token: `${e[0]}-${c[0]}`, color: c[1] } }) : []
    // for (let key in theme.extend.colors) {
    //   let colorId = key
    //   let cs = typeof theme.extend.colors[key] == 'string' ?
    //     [{ token: colorId, hex: theme.extend.colors[key] }] : Object.entries(theme.extend.colors[key]).map((e) => { return { token: e[0], hex: e[1] } })
    //   this.colors.push({ id: colorId, colors: cs })
    // }
    // var temp1 = {}
    // Object.entries( temp1 ).map( 
    //   e => { 
    //     return {
    //       name: e[0], 
    //       variations: typeof e[1] === "string" ? 
    //         {token: e[0], color: e[1]} : 
    //         Object.entries(e[1]).map( c => {
    //             return 
    //               {
    //                 token: `${e[0]}-${c[0]}`, color: c[1] })})
  }
  title = 'tema-ds-gov-angular';



}
