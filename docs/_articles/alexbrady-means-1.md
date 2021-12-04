---
layout: article
slug: ab-means-1
order: 69
external_selector: ab-means-1
title: alexbrady means... 1
paper_type: article
---

alex brady means...

I remember I can leave.
i remember the boundary between dream and Reality.
I still remember misperception in order to communicate in the medium of digital communication.
As such, *in time* it may seem more like I remember that the boundary exists,
but perhaps I am not in awareness of life beyond that boundary.

alex brady still means I remember I can leave.
alexbrady is the One that's out.

- alex brady

---

**Pop Quiz:**

What does alexbrady mean?

<div id="form-wrapper">
  <form id="ab-means-1">
    <input type="text" name="meaning" />
    <button type="submit">Send</button>
  </form>
</div>

<script>
  $('document').ready(function() {
    console.log('iamalexbrady');
    console.log('https://iamalexbrady.com/acim/t3c.html');
  
    $('#ab-means-1').submit(function(e) {
      e.preventDefault();
      var formData = $(this).serializeArray();
      var meaning = formData.filter(function(input) { return input.name == 'meaning'; })[0];
      var submission = meaning.value;

      var html = '<p><b>You submitted:</b></p><p>' + submission + '</p>';

      var $formWrapper = $('#form-wrapper');
      $(this).hide();
      $formWrapper.append(html);
    });
  });
</script>
