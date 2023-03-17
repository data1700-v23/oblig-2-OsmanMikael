package com.example.data1700_oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class FilmController {
  public List<Kunde> liste = new ArrayList<>();

  @PostMapping("/lagre")
  public void lagreKunde(Kunde innKunde){
    liste.add(innKunde);
  }
  @GetMapping("/sende")
  public List<Kunde> tilbakeAlle(){
    return liste;
  }
  @GetMapping("/slett")
  public void slettAlle(){liste.clear();}


}
